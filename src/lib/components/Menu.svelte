<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { currentUser } from '$stores/user.store'

	import { pwaBeforeInstallPrompt, canInstall } from '$lib/services/pwa';

	import { menuController, modalController, registerMenu } from '$ionic/svelte';
	import { isPlatform } from '@ionic/core';
	import * as allIonicIcons from 'ionicons/icons';

	import IOSInstall from '$lib/components/IOSInstall.svelte';

	let hideMenu = true; // a hack because the menu shows before the splash (in Chrome on Windows)

	export let side = 'start';

	// this is unfortunately needed in order to have the menuController API function properly
	onMount(() => {
		registerMenu('mainmenu');
	});

	const appPages: Array<{ title: string, url: string; requireLogin: boolean; icon: any }> = [
		{ title: 'Calendar', url: '/calendar', icon: allIonicIcons.calendarOutline, requireLogin: false },
		{ title: 'Charts', url: '/chart', icon: allIonicIcons.barChartOutline, requireLogin: false },
		{ title: 'Settings', url: '/settings', icon: allIonicIcons.settingsOutline, requireLogin: false },
		{ title: 'Info', url: '/info', icon: allIonicIcons.informationCircle, requireLogin: false },
	]


	let menuItems: Array<{ url: string; label: string; icon: any }> = [
		{
			label: 'Home',
			icon: allIonicIcons.home,
			url: '/'
		},
		{
			label: 'Components',
			icon: allIonicIcons.star,
			url: '/components'
		}
	];

	// Randomize the icons
	// const icons = Object.keys(allIonicIcons);
	// menuItems.map((menuItem) => {
	// 	const iconForMenu = icons[Math.floor(Math.random() * icons.length)];
	// 	// @ts-ignore
	// 	menuItem.icon = allIonicIcons[iconForMenu];
	// });
	// menuItems = [...menuItems];

	const closeAndNavigate = async (url: string) => {
		console.log('Navigate url', url);
		goto(url);

		menuController.close('mainmenu');
	};

	// hack because of visibility of menu in Chrome/Windows
	setTimeout(() => {
		hideMenu = false;
	}, 100);

	let iosInstall = isPlatform('ios') && !isPlatform('pwa');

	const showIOSinstall = async () => {
		const modal = await modalController.create({
			component: IOSInstall,
			componentProps: {},
			showBackdrop: true,
			backdropDismiss: false
		});

		modal.onDidDismiss().then((value) => {
			console.log('Dismissed the modal', value);
			if (value.role === 'backdrop') console.log('Backdrop clicked');
		});

		await modal.present();
	};
</script>

<ion-menu {side} content-id="main" menu-id="mainmenu" class:menuhide={hideMenu}>


		<ion-header>
			<ion-toolbar translucent="true">
				<ion-title>Menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-list>

				{#each appPages as p, i}
					{#if !p.requireLogin || $currentUser}
						<ion-menu-toggle auto-hide="false">
							<ion-item
								routerDirection="root"
								on:click={() => {
									closeAndNavigate(p.url)
								}}
								lines="none"
								detail="false"
								class={$page.route?.id === p.url ? 'active-item' : ''}
							>
							<!--$page.path.includes(href) ? 'active-item' : ''-->
								<ion-icon slot="start" icon={p.icon} />
								<ion-label>{p.title}</ion-label>
							</ion-item>
						</ion-menu-toggle>
					{/if}
				{/each}

				<!-- {#each menuItems as menuItem, i}
					<ion-item
						on:click={() => {
							closeAndNavigate(menuItem.url);
						}}
					>
						<ion-icon icon={menuItem.icon} slot="start" color={getRandomColor()} />
						<ion-label>{menuItem.label}</ion-label>
					</ion-item>
				{/each} -->

				<ion-item />
				{#if iosInstall}
					<ion-item on:click={showIOSinstall}>
						<ion-icon icon={allIonicIcons['download']} slot="start" />
						<ion-label>Install this app as PWA</ion-label>
					</ion-item>
					<ion-item />
				{/if}
				{#if $canInstall}
					<ion-item
						on:click={() => {
							const prompt = $pwaBeforeInstallPrompt;
							prompt.prompt();
						}}
					>
						<ion-icon icon={allIonicIcons['download']} slot="start" />
						<ion-label>Install this app as PWA</ion-label>
					</ion-item>
					<ion-item />
				{/if}
			</ion-list>
		</ion-content>
</ion-menu>

<style>
	ion-item {
		cursor: pointer;
	}
	.active-item {
		font-weight: bold;
	}

	.menuhide {
		display: none;
	}
</style>

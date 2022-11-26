<script lang="ts">
	// import { goto } from '$app/navigation';
	import { currentUser, currentProfile } from '$services/supabase.auth.service';
</script>
<ion-header>
	<ion-toolbar translucent="true">
		<ion-buttons slot="start">
			<ion-menu-button />
		</ion-buttons>
		<ion-title>Profile</ion-title>
	</ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
	<!-- profile page<br/>
	$currentProfile
	<pre>{JSON.stringify($currentProfile, null, 2)}</pre> -->
	<div class="flex-container">
		<ion-list class="input-box">
			<ion-item lines="none">
				<ion-label position="stacked">Name</ion-label>
				<ion-input type="text" value={$currentProfile?.name}></ion-input>
			</ion-item>
			<ion-item lines="none">
				<ion-label position="stacked">Bio</ion-label>
				<ion-input type="text" value={$currentProfile?.bio}></ion-input>
			</ion-item>
		</ion-list>	
	</div>

</ion-content>
<style>
	ion-label {
		font-weight: bold;
	}
	.input-box {
		max-width: 400px; 
		width: 400px;
		border: 1pt solid;
	}
	.flex-container {
		display: flex;
		display: -webkit-flex;
		display: -moz-flex;
		flex-flow: row wrap;
		-webkit-flex-flow: row wrap;
		-moz-flex-flow: row wrap;
		justify-content: center;
	}

</style>

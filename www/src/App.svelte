<script>
	let keyword = '';
    let fetchingDevicesData = fetch('devices.json').then(res => res.json())
</script>

<style>
h1 {
	color: purple;
}
.device {
	padding: 0.6em 0.3em;
	display: grid;
	grid-template-columns: 2fr 3fr 3fr 1fr;
}
.device:nth-child(2n) {
	background: #f9edf9;
}
.device:hover {
	background: #fbe6fb;
}
.device:hover .resolution {
	text-decoration: underline;
}
.brand {
	font-size: 0.8em;
}
.resolution {
	font-family: monospace;
	font-size: 1.3em;
}
.jump {
	text-align: right;
	font-size: 0.9em;
}
.keyword input {
	width: 100%;
}
.thead {
	position: sticky;
    top: 0;
	background: #fff;
}
</style>

<h1>Device Resolutions CN</h1>

{#await fetchingDevicesData}
<div class="loading">
    <p>Downloading devices data</p>
</div>
{:then devices}
<div class="content">
    <div class="keyword">
		<input type="search" placeholder="搜索" bind:value={keyword} >
	</div>
	<div class="devices">
		<div class="device thead">
			<div class="brand">品牌</div>
			<div class="name">产品</div>
			<div class="resolution">分辨率</div>
			<div class="jump"></div>
		</div>
        {#each devices as device (device.jdid)}
			{#if (!keyword || (device.brand.toLowerCase().includes(keyword.toLowerCase()) || device.name.toLowerCase().includes(keyword.toLowerCase())))}
			<div class="device">
				<div class="brand">{device.brand}</div>
				<div class="name">{device.name}</div>
				<div class="resolution">{device.resolution}</div>
				<div class="jump">
					<a href="https://item.jd.com/{device.jdid}.html" target="_blank">🔗</a>
				</div>
			</div>
			{/if}
		{/each}
	</div>
</div>
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}

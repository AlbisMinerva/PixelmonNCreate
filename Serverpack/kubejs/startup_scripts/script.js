// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('crushed_aluminium_ore').displayName('분쇄된 알루미늄 광석').texture('kubejs:item/crushed_aluminium_ore')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})


// onEvent('recipes', event => {
//	event.remove({output: 'pixelmon:white_healer'})
//	event.remove({output: 'pixelmon:orange_healer'})
//	event.remove({output: 'pixelmon:magenta_healer'})
//	event.remove({output: 'pixelmon:light_blue_healer'})
//	event.remove({output: 'pixelmon:yellow_healer'})
//	event.remove({output: 'pixelmon:lime_healer'})
//	event.remove({output: 'pixelmon:pink_healer'})
//	event.remove({output: 'pixelmon:gray_healer'})
//	event.remove({output: 'pixelmon:light_gray_healer'})
//	event.remove({output: 'pixelmon:cyan_healer'})
//	event.remove({output: 'pixelmon:purple_healer'})
//	event.remove({output: 'pixelmon:blue_healer'})
//	event.remove({output: 'pixelmon:brown_healer'})
//	event.remove({output: 'pixelmon:green_healer'})
//	event.remove({output: 'pixelmon:red_healer'})
//	event.remove({output: 'pixelmon:black_healer'})
//})
<script lang="ts" setup>
	import useGame from '../composables/useGame'
	import IconX from '~icons/lucide/x'
	import IconCircle from '~icons/lucide/circle'

	const { board, currentPlayer, winner, makeMove, resetGame } = useGame()
</script>

<template>
	<p class="mb-4 text-lg font-medium text-center">
		<output v-if="winner === null">Player {{ currentPlayer === 1 ? 'X' : 'O' }}'s turn</output>
		<output v-else-if="winner === 0">It's a draw!</output>
		<output v-else>Player {{ winner === 1 ? 'X' : 'O' }} wins!</output>
	</p>

	<table class="border-collapse">
		<tr v-for="(row, rowIndex) in board" :key="rowIndex">
			<td
				v-for="(cell, cellIndex) in row"
				:key="cellIndex"
				class="size-14 border border-muted"
			>
				<button
					type="button"
					class="w-full h-full flex items-center justify-center"
					:disabled="cell !== 0 || winner !== null"
					@click="makeMove(rowIndex, cellIndex, currentPlayer)"
				>
					<IconX v-if="cell === 1" />
					<IconCircle v-else-if="cell === 2" />
				</button>
			</td>
		</tr>
	</table>

	<button class="mt-12 w-full px-4 py-2 rounded bg-blue-500" type="button" @click="resetGame">Reset Game</button>
</template>

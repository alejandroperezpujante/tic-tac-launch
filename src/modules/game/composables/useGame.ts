import { ref, readonly } from 'vue'

type Board = [
	[0 | (1 | 2), 0 | (1 | 2), 0 | (1 | 2)],
	[0 | (1 | 2), 0 | (1 | 2), 0 | (1 | 2)],
	[0 | (1 | 2), 0 | (1 | 2), 0 | (1 | 2)]
]

function newEmptyBoard(): Board {
	return [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]
}

function isBoardFull(board: Board): boolean {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 0) return false
		}
	}
	return true
}

function checkWinner(board: Board): null | 1 | 2 {
	// Check rows
	for (let i = 0; i < board.length; i++) {
		if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== 0) {
			return board[i][0]
		}
	}

	// Check columns
	for (let i = 0; i < board.length; i++) {
		if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== 0) {
			return board[0][i]
		}
	}

	// Check diagonals
	if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 0) {
		return board[0][0]
	}
	if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== 0) {
		return board[0][2]
	}

	return null
}

export default function useGame() {
	const currentPlayer = ref<1 | 2>(Math.random() < 0.5 ? 1 : 2)
	const board = ref<Board>(newEmptyBoard())
	const winner = ref<null | 0 | 1 | 2>(null)

	function makeMove(row: number, col: number, player: 1 | 2) {
		if (!board.value[row]) return
		if (board.value[row][col] !== 0) return

		board.value[row][col] = player
		if (checkWinner(board.value)) {
			winner.value = player
			return
		}
		if (isBoardFull(board.value)) {
			winner.value = 0
			return
		}

		currentPlayer.value = currentPlayer.value === 1 ? 2 : 1
	}

	function resetGame() {
		board.value = newEmptyBoard()
		winner.value = null
		currentPlayer.value = Math.random() < 0.5 ? 1 : 2
	}

	return {
		board: readonly(board),
		currentPlayer: readonly(currentPlayer),
		winner: readonly(winner),
		makeMove,
		resetGame
	}
}

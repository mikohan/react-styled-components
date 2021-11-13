import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from './Card';
import Container from '@mui/material/Container';

const box = {
	height: '700px',
	padding: '0 20px',
};
const inner = {
	border: `1px solid pink`,
	width: '100%',
	minHeight: '100vh',
	padding: '10px',
	'& div': {
		paddingBottom: '20px',
	},
	'& .card': {
		marginBottom: '10px',
	},
};

export default function PureDnd() {
	const [boards, setBoards] = useState([
		{
			id: 1,
			title: 'First Column',
			items: [
				{ id: 11, order: 3, text: 'Card one' },
				{ id: 12, order: 3, text: 'Card two' },
				{ id: 13, order: 3, text: 'Card three' },
			],
		},
		{
			id: 2,
			title: 'Second Column',
			items: [
				{ id: 21, order: 3, text: 'Card one' },
				{ id: 22, order: 3, text: 'Card two' },
				{ id: 23, order: 3, text: 'Card three' },
			],
		},
		{
			id: 3,
			title: 'Third Column',
			items: [
				{ id: 31, order: 3, text: 'Card one' },
				{ id: 32, order: 3, text: 'Card two' },
				{ id: 33, order: 3, text: 'Card three' },
			],
		},
		{
			id: 4,
			title: 'Forth Column',
			items: [
				{ id: 41, order: 3, text: 'Card one' },
				{ id: 42, order: 3, text: 'Card two' },
				{ id: 43, order: 3, text: 'Card three' },
			],
		},
		// {
		//   id: 5,
		//   title: 'Fifth Column',
		//   items: [
		//     { id: 51, order: 3, text: 'Card one' },
		//     { id: 52, order: 3, text: 'Card two' },
		//     { id: 53, order: 3, text: 'Card three' },
		//   ],
		// },
		// {
		//   id: 6,
		//   title: 'Six  Column',
		//   items: [
		//     { id: 61, order: 3, text: 'Card one' },
		//     { id: 62, order: 3, text: 'Card two' },
		//     { id: 63, order: 3, text: 'Card three' },

		//   ],
		// },
	]);
	interface IItem {
		id: number;
		order: number;
		text: string;
	}
	interface ICurrentBoard {
		id: number;
		title: string;
		items: IItem[];
	}
	const initCurBoard: ICurrentBoard = {
		id: 0,
		title: 'Init title',
		items: [
			{
				id: 0,
				order: 0,
				text: 'string',
			},
		],
	};

	const initItem: IItem = {
		id: 0,
		order: 0,
		text: 'string',
	};

	const [currentBoard, setCurrentBoard] =
		useState<ICurrentBoard>(initCurBoard);
	const [currentItem, setCurrentItem] = useState<IItem>(initItem);

	function dragStartHandler(e: any, board: any, card: any) {
		setCurrentBoard(board);
		setCurrentItem(card);
	}
	function dragEndHandler(e: any) {
		e.target.style.bakcgroundColor = 'none';
	}

	function dragOverHandler(e: any) {
		e.preventDefault();
		e.stopPropagation();
		if (e.target.className === 'card') {
			e.target.style.border = `2px solid blue`;
		}
		if (e.target.className === 'test') {
			e.target.style.boxShadow = `0 20px 30px blue`;
		}
	}
	function dragLeaveHandler(e: any) {
		e.target.style.border = 'none';
	}
	function dropHandler(e: any, board: any, card: any) {
		e.preventDefault();
		const currentIndex = currentBoard?.items.indexOf(currentItem);
		currentBoard.items.splice(currentIndex, 1);

		const dropIndex = board.items.indexOf(card);
		board.items.splice(dropIndex + 1, 0, currentItem);

		setBoards(
			boards.map((b) => {
				if (b.id === board.id) {
					return board;
				}
				if (b.id === currentBoard.id) {
					return currentBoard;
				}
				return b;
			})
		);
		console.log(e.target.style.boxShadow);
		e.target.style.border = 'none';
	}

	function dropCardHandler(e: any, board: any) {
		const currentId = board.items.map((item: IItem) => item.id);
		if (!currentId.includes(currentItem.id)) {
			board.items.push(currentItem);
			const currentIndex = currentBoard.items.indexOf(currentItem);
			currentBoard.items.splice(currentIndex, 1);
			setBoards(
				boards.map((b) => {
					if (b.id === board.id) {
						return board;
					}
					if (b.id === currentBoard.id) {
						return currentBoard;
					}
					return b;
				})
			);
		}
	}

	return (
		<React.Fragment>
			<Container
				sx={{
					mt: 8,
				}}
				maxWidth="xl"
				component="main"
			>
				<Grid justifyContent="space-around" container item xs={12}>
					{boards.map((board) => (
						<Grid key={board.id} sx={box} item xs={3}>
							<Box
								className="test"
								sx={inner}
								onDragOver={(e) => dragOverHandler(e)}
								onDrop={(e) => dropCardHandler(e, board)}
							>
								{board.items.map((card) => (
									<div
										className="card"
										draggable={true}
										onDragOver={(e) => dragOverHandler(e)}
										onDragLeave={(e) => dragLeaveHandler(e)}
										onDragStart={(e) =>
											dragStartHandler(e, board, card)
										}
										onDragEnd={(e) => dragEndHandler(e)}
										// onDragOver={(e) => dragOverHandler(e)}
										onDrop={(e) =>
											dropHandler(e, board, card)
										}
										key={card.id}
									>
										<Card
											title={card.text}
											cardColor={'myPalette.main'}
											isDragging={false}
										/>
									</div>
								))}
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</React.Fragment>
	);
}

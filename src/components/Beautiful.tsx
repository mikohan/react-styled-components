import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { styled, createTheme, ThemeProvider } from '@mui/system';
import { v4 as uuid } from 'uuid';

import Card from './Card';

const customTheme = createTheme({
	palette: {},
});
const itemsFromBackend = [
	{ id: uuid(), content: 'First Task' },
	{ id: uuid(), content: 'Second Task' },
	{ id: uuid(), content: 'Third Task' },
	{ id: uuid(), content: 'Forth Task' },
	{ id: uuid(), content: 'Fifth Task' },
	{ id: uuid(), content: 'Sixht Task' },
	{ id: uuid(), content: 'Seventh Task' },
	{ id: uuid(), content: 'Eighth Task' },
	{ id: uuid(), content: 'Ninth Task' },
	{ id: uuid(), content: 'Tenth Task' },
];

const columnsFromBackend = {
	[uuid()]: { id: uuid(), name: 'InBox', items: itemsFromBackend },
	[uuid()]: { id: uuid(), name: 'IN PROGRESS', items: [] },
	[uuid()]: { id: uuid(), name: 'NOT IN STOCK', items: [] },
	[uuid()]: { id: uuid(), name: 'IN STOCK', items: [] },
	[uuid()]: { id: uuid(), name: 'READY TO SHIP', items: [] },
};

const onDragEnd = (result: any, columns: any, setColumns: any) => {
	if (!result.destination) return;
	const { source, destination } = result;

	if (source.droppableId !== destination.droppableId) {
		const sourceColumn = columns[source.droppableId];
		const destColumn = columns[destination.droppableId];
		const sourceItems = [...sourceColumn.items];
		const destItems = [...destColumn.items];
		const [removed] = sourceItems.splice(source.index, 1);
		destItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...sourceColumn,
				items: sourceItems,
			},
			[destination.droppableId]: {
				...destColumn,
				items: destItems,
			},
		});
	} else {
		const column = columns[source.droppableId];
		const copiedItems = [...column.items];
		const [removed] = copiedItems.splice(source.index, 1);
		copiedItems.splice(destination.index, 0, removed);
		setColumns({
			...columns,
			[source.droppableId]: {
				...column,
				items: copiedItems,
			},
		});
	}
};

const MyThemeComponent = styled('div')(({ theme }) => ({
	// color: theme.palette.primary.contrastText,
	// backgroundColor: theme.palette.primary.main,
	// padding: theme.spacing(1),
	// borderRadius: theme.shape.borderRadius,
	display: 'flex',
	justifyContent: 'center',
	height: '100%',
}));

export default function ThemeUsage() {
	const [columns, setCoulumns] = useState(columnsFromBackend);
	const cardColor = 'lightSuccess.light';
	return (
		<ThemeProvider theme={customTheme}>
			<MyThemeComponent>
				<DragDropContext
					onDragEnd={(result) =>
						onDragEnd(result, columns, setCoulumns)
					}
				>
					{Object.entries(columns).map(([id, column]) => {
						return (
							<div
								key={id}
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<h2>{column.name}</h2>
								<div
									style={{
										margin: 8,
									}}
								>
									<Droppable droppableId={id}>
										{(provided, snapshot) => {
											return (
												<div
													{...provided.droppableProps}
													ref={provided.innerRef}
													style={{
														background:
															snapshot.isDraggingOver
																? 'lightblue'
																: 'lightgray',
														padding: 4,
														width: 250,
														minHeight: 1000,
													}}
												>
													{column.items.map(
														(item, index) => {
															return (
																<Draggable
																	key={
																		item.id
																	}
																	draggableId={
																		item.id
																	}
																	index={
																		index
																	}
																>
																	{(
																		provided,
																		snapshot
																	) => {
																		return (
																			<div
																				ref={
																					provided.innerRef
																				}
																				{...provided.draggableProps}
																				{...provided.dragHandleProps}
																				style={{
																					borderRadius: 10,
																					userSelect:
																						'none',
																					padding: 0,
																					margin: '0 0 8px 0',
																					minWidth:
																						'50px',

																					background:
																						snapshot.isDragging
																							? '#1769aa'
																							: '#2196f3',
																					color: '#fff',
																					...provided
																						.draggableProps
																						.style,
																				}}
																			>
																				<Card
																					title={
																						item.content
																					}
																					isDragging={
																						snapshot.isDragging
																					}
																					cardColor={
																						cardColor
																					}
																				/>
																			</div>
																		);
																	}}
																</Draggable>
															);
														}
													)}
													{provided.placeholder}
												</div>
											);
										}}
									</Droppable>
								</div>
							</div>
						);
					})}
				</DragDropContext>
			</MyThemeComponent>
		</ThemeProvider>
	);
}

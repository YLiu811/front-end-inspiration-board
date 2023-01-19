import PropTypes from "prop-types";


// loop through boards and get card list out, pass to cardList
// returns h2 with title, h4 with owner, a card element for cards

function Board(props){
    const boards = props.boards;
    const boardComponents = []
    console.log(boards)
    for (const board of boards){
        console.log(board)
        boardComponents.push(
            <h1 
            key={board.id}
            onClick={()=>{
                props.onBoardSelect(board)
            }}>{board.title}</h1>
        )
    }
    return (
        <div>
            {boardComponents}
        </div>
    )
}

Board.propTypes = {
    boards: PropTypes.array,
    onBoardSelect: PropTypes.func,
}

export default Board;


function ChessPatternSetup({
    pattern,
    setPattern
}) {
    const pieces = [
        "♔",
        "♕",
        "♖",
        "♗",
        "♘",
        "♙"
    ];

    const selectPiece = (piece) => {
        if (pattern.length >= 4) {
            return;
        }
        setPattern([...pattern, piece]);
    };

    return (

        <div>

            <h3>Select 4 Chess Pieces</h3>
            <div className="pieces">

                {pieces.map((piece, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            selectPiece(piece)
                        }
                    >
                        {piece}
                    </button>
                ))}

            </div>

            <h4>
                Pattern:{pattern.join(" ")}
            </h4>
        </div>
    );
}

export default ChessPatternSetup;
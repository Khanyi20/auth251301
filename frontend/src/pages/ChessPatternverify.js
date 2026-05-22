import { useState } from "react";

function ChessPatternVerify({

    savedPattern,
    onSuccess

}) {

    const [selected, setSelected] = useState([]);

    const pieces = [
        "♔",
        "♕",
        "♖",
        "♗",
        "♘",
        "♙"
    ];

    const selectPiece = (piece) => {

        const newPattern = [
            ...selected,
            piece
        ];

        setSelected(newPattern);

        if (newPattern.length === 4) {

            const isCorrect =
                JSON.stringify(newPattern)
                ===
                JSON.stringify(savedPattern);

            if (isCorrect) {

                alert(
                    "2FA Verification Successful"
                );

                onSuccess();

            }

            else {

                alert(
                    "Incorrect Chess Pattern"
                );

                setSelected([]);

            }

        }

    };

    return (

        <div>

            <h3>
                Verify Chess Pattern
            </h3>

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
                Selected:
                {selected.join(" ")}
            </h4>

        </div>

    );

}

export default ChessPatternVerify;
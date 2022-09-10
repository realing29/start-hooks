import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [data, setData] = useState("Блок");
    const block = useRef();
    const handleClick = () => {
        block.current.style.height = "80px";
        block.current.style.width = "150px";
        setData("text");
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={block}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small className="mx-5">{data}</small>
            </div>
            <div>
                <button onClick={handleClick}>change block</button>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;

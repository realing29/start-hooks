import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Components>
                <Component />
                <Component />
                <Component />
            </Components>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};
const Components = ({ children }) => {
    return React.Children.map(children, (child, i) => (
        <>
            <span>{i + 1}</span>
            {child}
        </>
    ));
};

export default ChildrenExercise;

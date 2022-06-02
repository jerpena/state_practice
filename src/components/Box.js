function Box(props) {
    const styles = {
        backgroundColor: props.isLightOn ? "#21d4e0" : "transparent",
        color: props.isLightOn ? "#000000" : "#21d4e0",
    };

    return (
        <div
            style={styles}
            className="box"
            id={props.id}
            onClick={props.toggle}
        >
            {props.isLightOn && <p>Light is on</p>}
            {!props.isLightOn && <p>Light is off</p>}
        </div>
    );
}

export default Box;;
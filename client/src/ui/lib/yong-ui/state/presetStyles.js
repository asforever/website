export default {
    paper: {
        backgroundColor: `#fff`,
        borderRadius: `0.2em`,
        margin: `.5em`,
        padding: `1em`,
        boxShadow: `0px 0px 3px #00000033`
    },
    paperContainer: {
        backgroundColor: `#fff`,
        borderRadius: `0.2em`,
        margin: `.5em`,
        padding: `1em`,
        boxShadow: `0px 0px 3px #00000033`
    },
    container: {
        display: `flex`,
        justifyContent: `center`,
    },
    list: {
        display: `flex`,
        margin: `0.3em`,
        padding: `0.3em`,
    },
    listButton: {
        userSelect: `none`,
        '&:hover': {
            backgroundColor: `#ccc`,
        }
    },
    listButtonActive: {
        backgroundColor: `#222222`,
        transition: `background-color 200ms cubic-bezier(1, 0.5, 0.2, 0) 0ms`,
        /*        border: `1px solid #000`,
                lineHeight: `1px`,*/
    },
    linkButton: {
        display: `flex`,
        userSelect: `none`,
        color: `#757374`,
        cursor: `pointer`,
        '&:hover': {
            textDecorationLine: `underline`
        },
    },
    linkButtonActive: {
        color: `#0000cc`,
    },
    iconButton: {
        width: `1em`,
        height: `1em`,
        padding: `2px`,
        '&:hover': {
            fill: `#1a1f6e`,
        }
    },
    dividerHor: {
        height: "1px",
        backgroundColor: `rgba(0, 0, 0, 0.12)`,
    },
    photoFrame: {
        padding: `0.2em`,
        backgroundColor: `#ffffff`,
        lineHeight: 0,
    },
    "typography-h1": {
        fontSize: `2em`,
        margin: `0.3em 0 0.3em 0.1em`,
        fontFamily: `fantasy`,
        fontStyle: `italic`,
        color: `#282327`,
    },
    "typography-h2": {
        fontSize: `1.5em`,
        margin: `0.2em 0 0.2em 0.15em`,
        fontFamily: `fantasy`,
        color: `#282327`,
    },
    "typography-h3": {
        fontSize: `0.9em`,
        margin: `0.1em 0 0.1em 0.3em`,
        color: `#757374`,
    },
    Icon: {
        width: `1em`,
        height: `1em`,
        '& hover': {
            fill: '#6061cb',
        }
    },
    iconActive: {
        width: `1em`,
        height: `1em`,
        fill: '#474547',
        stroke: `black`,
        strokeWidth: `2`
    },
    link: {
        margin: `0.5em`,
        color: `#6d62cb`,
    }
}

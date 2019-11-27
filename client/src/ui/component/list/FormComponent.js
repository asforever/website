import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import CloseIcon from '@material-ui/icons/close';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => {
    return {
        container: {
            position: `fixed`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            width: `100vw`,
            height: `100vh`,
            top: 0,
            '& label': theme.self.fontStyle1,
        },
        listContainer: {
            borderRadius: `4px`,
            display: `flex`,
            flexDirection: `column`,
            width: `22em`,
            padding: theme.spacing(3),
            background: theme.self.bgImg1
        },
        textField: {
            margin: theme.spacing(1),
        },
        buttonContainer: {
            width: `14em`,
            display: `flex`,
            justifyContent: `space-between`,
            margin: `0 auto`,
            marginTop: `1.5em`,
            padding: `5px`,
        },
        button: {
            width: `6rem`,
        },
    }

});

let submitData = {};

function FormComponent(props) {
    const classes = useStyles();
    const {onClose, onApply, listData, bottomData, autoClose} = props;

    const onchange = (key, text) => {
        submitData[key] = text;
    };

    const apply = (e) => {
        e.preventDefault();
        onApply(submitData);
        if (autoClose) onClose();
    };

    return (
        <div className={classes.container}>
            <List>
                <form className={classes.listContainer} id="myForm" onSubmit={apply}>
                    {listData.map(list => {
                        let text = list, type = 'text', name, autoComplete;
                        if (list.text) text = list.text;
                        if (list.type) type = list.type;
                        if (list.name) type = list.name;
                        const useMul = type !== "password" && type !== "username";

                        return <TextField key={text}
                                          name={name}
                                          multiline={useMul}
                                          id={text}
                                          label={text}
                                          type={type}
                                          className={classes.textField}
                                          autoComplete={type}
                                          onChange={(e) => {
                                              onchange(text, e.target.value)
                                          }}
                                          margin="normal"
                        />
                    })}
                    <div className={classes.buttonContainer}>
                        <Button
                            label="Submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            type="submit"
                            className={classes.button}
                        >
                            {bottomData[0]}
                        </Button>
                        <Button
                            label="Submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            onClick={onClose}
                            startIcon={<CloseIcon/>}
                        >
                            {bottomData[1]}
                        </Button>
                    </div>
                </form>
            </List>

        </div>
    );
}

FormComponent.propTypes = {
    onClose: PropTypes.func.isRequired,
    onApply: PropTypes.func.isRequired,
    listData: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])),
    bottomData: PropTypes.array.isRequired,
    autoClose: PropTypes.bool,
};

export default FormComponent;

import React from "react";
import MiniPanel from "../../lib/yong-ui/components/container/MiniPanel";
import SliderInput from "../../lib/yong-ui/components/input/SliderInput";
import PropTypes from "prop-types";

export default function MiniUI({className, lists = []}) {
    return (
        <MiniPanel className={className}>
            {lists.map(list => {
                return <SliderInput key={list.title} title={list.title}/>
            })}
        </MiniPanel>
    )
}

MiniUI.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string
    })),
};

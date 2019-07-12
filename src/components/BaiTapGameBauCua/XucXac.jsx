import React, { Component } from 'react'

import {connect} from 'react-redux'

class XucXac extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <button onClick={()=>this.props.choiGame()} className="bnt btn-primary">Play</button>
                    </div>
                    <div className="col-md-8 text-center">
                        {
                            this.props.xucXac.map((item, index) => {
                                return(
                                    <img key={index} width={50} height={50} src={item.hinhAnh} alt=""/>
                                )
                                
                            })
                        }
                    </div>
                    <div className="col-md-2">
                        <div className="display-4">
                            {this.props.tongDiem} $
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        xucXac: state.GameBauCuaReducer.xucXac,
        tongDiem: state.GameBauCuaReducer.tongDiem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        choiGame: () => {
            dispatch({
                type: 'CHOI_GAME'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
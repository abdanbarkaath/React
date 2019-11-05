import React, { Component } from 'react'
import Fragments from './Fragments'

export default class ParentFragments extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <Fragments></Fragments>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

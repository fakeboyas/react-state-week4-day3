import React, { Component } from "react";
import Card from "../../components/Cards/Card";

export default class LandingPage extends Component {
    state = {
        nama: "Muhamad Sidiq Ilyas",
        alamat: "Jalan Kemandoran 8 No.131",
        avatar:
            "https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg",
    };

    render() {
        return (
            <>
                <Card
                    avatar={this.state.avatar}
                    nama={this.state.nama}
                    alamat={this.state.alamat}
                />
            </>
        );
    }
}

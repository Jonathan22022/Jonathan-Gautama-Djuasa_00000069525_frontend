import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Layout1.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    /*menginisialisasi state awal komponen, yang nantinya akan digunakan untuk menampilkan pesan salam berdasarkan waktu saat komponen dipasang (dengan bantuan metode setGreeting() yang dijalankan di componentDidMount()).*/
    constructor(props) {
        super(props);
        this.state = {
            greeting: ""
        };
    }

    componentDidMount() {
        this.setGreeting();
    }

    /* mengatur greeting berdasarkan waktu sekarang*/
    setGreeting() {
        const currentTime = new Date().getHours();
        let greeting = "";
        if (currentTime >= 6 && currentTime < 12) {
            greeting = "Selamat Pagi";
        } else if (currentTime >= 12 && currentTime < 18) {
            greeting = "Selamat Siang";
        } else {
            greeting = "Selamat Malam";
        }
        this.setState({ greeting });
    }

    /*menggunakan render karena memanfaatkan state 'greeting'*/
    render() {
        return (
            <body>
                <div class="form" id="d">
                    {/*menampilkan nilai dari state dari 'greeting'*/}
                    <h1>{this.state.greeting}, Pengunjung !</h1>
                    <h2>Selamat Datang di Fame</h2>
                    <h4>Tekan tombol lanjut untuk melihat fakta menarik seputar kucing</h4>
                    <div className="button-container">
                        <Link to="/fact">
                            <button type="button" className="btn btn-outline-primary btn-lg btn-neon-blue">Lanjut</button>
                        </Link>
                    </div>
                </div>
                <div class="holo"></div>
            </body>
        );
    }
}

export default Home;

import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import "./dashboard.css"
import Notification from "../notification/Notification"
import { LineChart, BarChart, Bar, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend } from 'recharts'
import Dashtodo from "./Dashtodo";
import Dashoperat from "./Dashoperat";







function Dashboard() {
    

    
    const [value, onChange] = useState(new Date());


    const {
        todos,
        notificationOpenViewFunc,
        notificationView,
        deleteAllNotification,
        noti2,
        openProfileFunc,
        openViewFunc,
        openProfileDiv,
        setNotificationView,
        setOpenProfileDiv,
        todos2,
        settos,
        operat

    } = useContext(AppContext);

    

    const [openCalendar, setOpenCalendar] = useState(false);

    const clickc2 = () => {
        setOpenCalendar(true)

    }

    useEffect(() => {
        const closeOnOutsideClick = (e) => {
            if (notificationView && !e.target.closest("#myInputNoti")) {
                setNotificationView(false)
            }
        };

        window.addEventListener("click", closeOnOutsideClick);

        return () => {
            window.removeEventListener("click", closeOnOutsideClick);
        };
    }, [notificationView]);


    useEffect(() => {
        const closeOnOutsideClick = (e) => {
            if (openProfileDiv && !e.target.closest("#profileDivOpen") && !e.target.closest("#profileDivOpen2")) {
                setOpenProfileDiv(false)
            }
        };

        window.addEventListener("click", closeOnOutsideClick);

        return () => {
            window.removeEventListener("click", closeOnOutsideClick);
        };
    }, [openProfileDiv]);


    var todouzunluk = todos.length
    var date = new Date();
    const [dots, setDots] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => !prevDots);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const [saat, setSaat] = useState(new Date().getHours());
    const [dakika, setDakika] = useState(new Date().getMinutes());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const saatFormat = String(date.getHours()).padStart(2, '0');
            const dakikaFormat = String(date.getMinutes()).padStart(2, '0');
            setSaat(saatFormat);
            setDakika(dakikaFormat);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    const gün = date.getDate().toString().padStart(2, '0');
    const yil = date.getFullYear();
    const ay = (date.getMonth() + 1).toString().padStart(2, '0');


    var date = new Date();
    const ay2 = date.getMonth();

    var dateName = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const data = [
        {
            name: dateName[(ay2 - 6 + 12) % 12],
            expense: 10,
            revenue: 20,
            amt: 30,
        },
        {
            name: dateName[(ay2 - 5 + 12) % 12],
            expense: 30,
            revenue: 18,
            amt: 22,
        },
        {
            name: dateName[(ay2 - 4 + 12) % 12],
            expense: 20,
            revenue: 30,
            amt: 22,
        },
        {
            name: dateName[(ay2 - 3 + 12) % 12],
            expense: 27,
            revenue: 39,
            amt: 20,
        },
        {
            name: dateName[(ay2 - 2 + 12) % 12],
            expense: 18,
            revenue: 48,
            amt: 21,
        },
        {
            name: dateName[(ay2 - 1 + 12) % 12],
            expense: 20,
            revenue: 30,
            amt: 20,
        },
        {
            name: dateName[ay2],
            expense: 30,
            revenue: 40,
            amt: 20,
        },
    ];


    return (
        <div className="dashboard-container">
            <div className="dash-control-div">
                <div className="dash-control-panel">
                    <div className="dash-functional-menu">

                        <div className="dash-empty-menu-div">
                            <div className="dash-office-content">
                                <div className="dash-office-logo"></div>
                                <div className="dash-office-name">Starch</div>
                            </div>
                        </div>

                        <div className="dash-menu-button"><a className="dash-active-button" href="/dashboard">
                            <div className="dash-ticket-dashicon"></div>
                            <div className="dash-ticket-text">Dashboard</div>
                        </a></div>

                        <div className="dash-menu-button"><a href="/mypage">
                            <div className="dash-ticket-stockicon"></div>
                            <div className="dash-ticket-tex-first">Stock</div>
                            <div className="dash-ticket-number-co">
                                <div className="dash-ticket-lenght-circle">{todouzunluk}</div>
                            </div>
                        </a></div>

                        <div className="dash-menu-button"><a href="/chart">
                            <div className="dash-ticket-charticon"></div>
                            <div className="dash-ticket-text">Charts</div>
                        </a></div>

                        <div className="dash-menu-button"><a href="/customers">
                            <div className="dash-ticket-customericon"></div>
                            <div className="dash-ticket-text">Customers</div>
                        </a></div>


                        <div className="dash-menu-button"><a href="/support">
                            <div className="dash-ticket-supporticon"></div>
                            <div className="dash-ticket-text">Support</div>
                        </a></div>
                    </div>



                    <div className="dash-user-account">

                        <div className="dash-menu-button"><a href="/setting">
                            <div className="dash-ticket-settingicon"></div>
                            <div className="dash-ticket-text">Settings</div>
                        </a></div>

                    </div>
                </div>
            </div>
            <div className="dash-top">
                <div className="stock-top-bar">
                    <div className="stock-top-small-co">
                        <div className="stock-top-date-co">
                            <div className="stock-date-ico"></div>
                            <div className="stock-date-text">{gün}/{ay}/{yil}</div>
                        </div>
                        <div className="stock-top-clock-co">
                            <div className="stock-clock-ico"></div>
                            <div id="saat" className="stock-clock-text">
                                <span className="hour">{saat}</span>
                                {dots ? <span className="black-dots">:</span> : <span className="transparent-dots">:</span>}
                                <span className="minute">{dakika}</span>
                            </div>
                        </div>
                        <div className="stock-top-noti-co">
                            <div id="myInputDiv" className="stock-noti-search">

                            </div>
                            <div className="stock-noti-bell"><button className="belll-btn" id="myInputNoti" onClick={notificationOpenViewFunc}>

                                {notificationView ? <div className="opening-notification-div">

                                    <div className="notification-info">
                                        <div className="notification-title">Hareketler</div>
                                        <div className="notification-all-delete"><button onClick={deleteAllNotification}>Tümünü Temizle</button></div>
                                    </div>
                                    <div className="notification-mapping">
                                        {noti2.map((noti, index) => (<Notification
                                            noti={noti}
                                            key={index}



                                        />))}
                                    </div>
                                </div> : ""}</button></div>
                            <div className="stock-noti-message"><button>

                            </button></div>
                        </div>
                        <div className="stock-top-user-pho">
                            <button id="profileDivOpen" onClick={openProfileFunc} className="stock-photo-background"></button>
                            {openProfileDiv ? <div id="profileDivOpen2" className="profile-container">
                                <div className="profile-account-div">
                                    <div className="profile-open-image">
                                        <div className="pp-opening-view"></div>

                                    </div>
                                    <div className="profile-open-name">
                                        <div className="name-surname-opening-bottom">Emirhan Körhan</div>
                                        <div className="name-mail-opening-bottom">korhanemirhann@gmail.com</div>
                                        <div className="name-bttn-opening-bottom"><button>Account Settings</button></div>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="profile-mail-div">
                                    <div className="mail-images-div"><div className="mail-color-img">EK</div></div>
                                    <div className="mail-content-div">
                                        <div className="mail-cont-bold-view">Emirhan Körhan</div>
                                        <div className="mail-cont-view">korhanemirhann@gmail.com</div>
                                    </div>
                                </div>
                                <div className="profile-settings-div">
                                    <div className="add-account-div"><button><i class="fa-solid fa-plus"></i></button></div>
                                    <div className="sign-out-account"><button>Sign Out</button></div>
                                </div>
                            </div> : ""}
                        </div>
                    </div>
                </div>
                <div className="stock-top-content">
                    <div className="stock-alt-co-div">
                        <div className="stock-category-text">Dashboard</div>
                        <div className="dash-new-sto-add">
                            <button onClick={clickc2}>

                            </button>
                        </div>
                    </div>
                </div>

                <div className="dash-graphics-container">
                    <div className="small-dash-cont">
                        <div className="dash-statics">
                            <div className="three-static-div">
                                <div className="static1">
                                    <div className="static-text">
                                        <div className="static-text1">Today's Revenue</div>
                                        <div className="static-text2"><div className="color-static">%0,9 &nbsp; <i class="fa-solid fa-arrow-trend-up"></i></div></div>
                                    </div>
                                    <div className="static-number">$2033.4</div>
                                    <div className="static-info">Today Revenue</div>
                                    <div></div>
                                    <div></div>
                                </div>

                                <div className="static2">
                                    <div className="static-text">
                                        <div className="static-text1">Today's Expense</div>
                                        <div className="static-text2"><div className="color-staticred">%3,5 &nbsp; <i class="fa-solid fa-arrow-trend-up"></i></div></div>
                                    </div>
                                    <div className="static-number">$1387.3</div>
                                    <div className="static-info">Today Expense</div>
                                    <div></div>
                                    <div></div>
                                </div>

                                <div className="static3">
                                    <div className="static-text">
                                        <div className="static-text1">Today's Order</div>
                                        <div className="static-text2"><div className="color-static">%12 &nbsp; <i class="fa-solid fa-arrow-trend-up"></i></div></div>
                                    </div>
                                    <div className="static-number">897</div>
                                    <div className="static-info">Today Order</div>
                                    <div></div>
                                    <div></div></div>
                            </div>
                            <div className="dash-graphic-chart">
                                <div className="chart-one">
                                    <div className="chart-textinfo">Today's Balance</div>
                                    <div className="chart-mys">
                                        <LineChart
                                            width={370}
                                            height={210}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 40,
                                                left: -10,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="revenue" stroke="#000000" activeDot={{ r: 8 }} />
                                            <Line type="monotone" dataKey="expense" stroke="#00ac59" />
                                        </LineChart>
                                    </div>
                                </div>
                                <div className="chart-two">
                                    <div className="chart-textinfo">Stock Density</div>
                                    <div className="chart-mys">
                                        <BarChart
                                            width={370}
                                            height={210}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 40,
                                                left: -10,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="revenue" fill="#00ac59" />
                                            <Bar dataKey="expense" fill="#c0c0c0" />
                                        </BarChart>
                                    </div>

                                </div>
                            </div>
                            <div className="end-products-container">
                                <div className="end-product-text">Recently Added Products</div>
                                <div className="end-proinfo">
                                    <div className="end-proicon"><i class="fa-solid fa-grip"></i></div>
                                    <div className="end-proproduct">Product</div>
                                    <div className="end-prodate">Rise Date</div>
                                    <div className="end-procode">Product ID</div>
                                    <div className="end-propiece">Piece</div>
                                    <div className="end-proprice">Price</div>

                                </div>
                                {todos2.map((emp, index) => (
                                    <Dashtodo

                                        key={index}
                                        todo={emp}
                                        settos={settos}
                                    />))}
                            </div>
                        </div>


                        <div className="dash-customer">
                            <div className="custom-cont">
                                <div className="customer-texting">Recent Buyers</div>
                                <div className="customer-mapping">
                                    {operat.map((emp, index) => (
                                        <Dashoperat

                                            key={index}
                                            operatx={emp}
                                            operat={operat}

                                        />))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openCalendar ? <div className="calendar-container">
                <div className="calender-white-div">
                
                </div>
            </div> : ""}
        </div>
    )
}

export default Dashboard


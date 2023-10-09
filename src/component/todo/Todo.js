import React, { useState } from "react";
import "./todo.css"
import { Link } from "react-router-dom";


export default function Todo({ todo, settos, 
    createOneNotification, operat, setUpdatedTodoId, 
    setTodonunpraysi, valuesPurchase, setValuesPurchase, 
    buyProductName, openBuyAdd, todos, setOpenBuyAdd, 
    qrCodeFunc, setBuyProductName, barCodeFunc, setReceivedData, 
    setEditScreen, deleteOneProduct, receivedData, setBarcodediv, 
    setBuydiv, setOpenSalesAdd, setSalesdiv, setDeleteOp, deleteOp, salesdiv }) {


    let icon;
    switch (todo.inputCategory) {
        case 'Cep Telefonları':
            icon = <i class="fa-solid fa-mobile-screen-button"></i>;
            break;

        case 'Dizüstü Bilgisayarlar':
            icon = <i class="fa-solid fa-laptop"></i>;
            break;

        case 'Masaüstü Bilgisayarlar':
            icon = <i class="fa-solid fa-desktop"></i>;
            break;

        case 'Giyilebilir Teknoloji':
            icon = <i class="fa-solid fa-hand-sparkles"></i>;
            break;

        case 'Şarj Aletleri':
            icon = <i class="fa-solid fa-bolt"></i>;
            break;

        case 'Hoparlörler':
            icon = <i class="fa-solid fa-volume-low"></i>;
            break;

        case 'Depolama Cihazları':
            icon = <i class="fa-solid fa-sim-card"></i>;
            break;

        case 'Ekran Koruyucular':
            icon = <i class="fa-regular fa-note-sticky"></i>;
            break;

        case 'Tabletler':
            icon = <i class="fa-solid fa-tablet-screen-button"></i>;
            break;

        case 'Yazıcılar':
            icon = <i class="fa-solid fa-print"></i>;
            break;

        case 'Projeksiyonlar':
            icon = <i class="fa-solid fa-mobile-screen-button"></i>;
            break;

        case 'Yataklar':
            icon = <i class="fa-solid fa-bed"></i>;
            break;

        case 'Mutfak Gereçleri':
            icon = <i class="fa-solid fa-kitchen-set"></i>;
            break;

        case 'Halı ve Kilim':
            icon = <i class="fa-solid fa-rug"></i>;
            break;

        case 'Küçük Ev Aletleri':
            icon = <i class="fa-solid fa-blender"></i>;
            break;

        case 'Mobilyalar':
            icon = <i class="fa-solid fa-couch"></i>;
            break;

        case 'Bahçe Dekorasyonu':
            icon = <i class="fa-solid fa-tree"></i>;
            break;

        case 'Tarım Aletleri':
            icon = <i class="fa-solid fa-tractor"></i>;
            break;

        case 'Beyaz Eşyalar':
            icon = <i class="fa-solid fa-toilet-portable"></i>;
            break;

        case 'Televizyonlar':
            icon = <i class="fa-solid fa-tv"></i>;
            break;

        case 'İlaç ve Vitamin':
            icon = <i class="fa-solid fa-capsules"></i>;
            break;

        case 'Kamp Malzemeleri':
            icon = <i class="fa-solid fa-tent"></i>;
            break;

        case 'Bisikletler':
            icon = <i class="fa-solid fa-bicycle"></i>;
            break;

        case 'Scooterlar':
            icon = <i class="fa-solid fa-person-biking"></i>;
            break;

        case 'Spor Aletleri':
            icon = <i class="fa-solid fa-dumbbell"></i>;
            break;

        case 'Motosikletler':
            icon = <i class="fa-solid fa-motorcycle"></i>;
            break;

        case 'Makyaj Malzemeleri':
            icon = <i class="fa-solid fa-eye-dropper"></i>;
            break;

        case 'Takılar':
            icon = <i class="fa-regular fa-gem"></i>;
            break;

        case 'Kişisel Bakım Ürünleri':
            icon = <i class="fa-solid fa-hand-holding-heart"></i>;
            break;

        case 'Kadın Bakım Ürünleri':
            icon = <i class="fa-solid fa-person-dress"></i>;
            break;

        case 'Erkek Aksesuarları':
            icon = <i class="fa-solid fa-person"></i>;
            break;

        case 'Kulaklıklar':
            icon = <i class="fa-solid fa-headphones"></i>;
            break;

        case 'Arabalar':
            icon = <i class="fa-solid fa-car-rear"></i>;
            break;

        default:
            icon = <i class="fa-solid fa-globe"></i>;
    }

    const openBuyAddFunc = () => {
        setTodonunpraysi(todo.inputPrice)
        setOpenBuyAdd(true);
        setValuesPurchase({
            ...valuesPurchase,
            operationProduct: todo.inputText,
        });
        setReceivedData({
            inputId: todo.id,
            inputPiece: todo.inputPiece,
            inputText: todo.inputText,
            inputCode: todo.inputCode,
            inputDate: todo.inputDate,
            inputComment: todo.inputComment,
            inputPrice: todo.inputPrice,
            inputCategory: todo.inputCategory
        });

    }

    const openSalesAddFunc = () => {
        setTodonunpraysi(todo.inputPrice)
        setOpenSalesAdd(true);
        setValuesPurchase({
            ...valuesPurchase,
            operationProduct: todo.inputText,
        });
        setReceivedData({
            inputId: todo.id,
            inputPiece: todo.inputPiece,
            inputText: todo.inputText,
            inputCode: todo.inputCode,
            inputDate: todo.inputDate,
            inputComment: todo.inputComment,
            inputPrice: todo.inputPrice,
            inputCategory: todo.inputCategory
        });

    }



    const [deletediv, setDeletediv] = useState(false);
    const [moreButton, setMoreButton] = useState(true);

    const firstSettrosItem = settos[0]; // İlk öğeyi al
    const dangerValue = firstSettrosItem?.settingDanger; // danger özelliğini al

    const [detaildiv, setDetaildiv] = useState(false);

    const moreViewFunc = () => {
        setMoreButton(!moreButton);

    }

    const openBuyViewFunc = () => {
        setDetaildiv(false)
        setBuydiv(true)
    }

    const openSalesViewFunc = () => {
        setDetaildiv(false)
        setSalesdiv(true)
    }

    const qrDetailCodeFunc = () => {
        setBuydiv(true)
        setDetaildiv(false)

    }
    const barDetailCodeFunc = () => {
        setBarcodediv(true)
        setDetaildiv(false)
    }





    const detailViewFunc = () => {
        setDetaildiv(true);
    }

    const detailViewFuncClose = () => {
        setDetaildiv(false);
    }

    const handleRemove = (id) => {
        deleteOneProduct(id);
        deleteViewFuncClose();
        const notificationData = {
            id: 0,
            notificationText: `${todo.inputText} adlı ürünü stoğunuzdan sildiniz!`
            //`${valuesPurchase.operationCompany} ad ${updatedPurchaseData.operationPiece} adet ${valuesPurchase.operationProduct} alımı yaptınız.  `

        }
        createOneNotification(notificationData)
    };

    //() => { handleRemove(todo.id) }

    const deleteViewFunc = () => {
        setDeletediv(true);

    }

    const deleteViewFuncClose = () => {
        setDeletediv(false);

    }

    const editViewFunc = () => {
        setUpdatedTodoId(true)

        setReceivedData({
            inputId: todo.id,
            inputPiece: todo.inputPiece,
            inputText: todo.inputText,
            inputCode: todo.inputCode,
            inputDate: todo.inputDate,
            inputComment: todo.inputComment,
            inputPrice: todo.inputPrice,
            inputCategory: todo.inputCategory
        });
    };

    const handleUpdateData = () => {
        setReceivedData({
            inputId: todo.id,
            inputPiece: todo.inputPiece,
            inputText: todo.inputText,
            inputCode: todo.inputCode,
            inputDate: todo.inputDate,
            inputComment: todo.inputComment,
            inputPrice: todo.inputPrice,
            inputCategory: todo.inputCategory
        });
    };

    var tarihString = todo.inputDate;
    const dangerpiecex = todo.inputPiece <= dangerValue ? 'redDiv' : 'greenDiv';

    // Tarihi Date nesnesine çevirme
    var tarih = new Date(tarihString);

    // Ay bilgisini çıkarma
    var ay = tarih.getMonth();
    var gün = tarih.getDate();

    var ayIsimleri = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];

    var ayIsmi = ayIsimleri[ay];



    return (

        <div className="todo">
            <div className="category-icon">{icon}</div>

            <div key={todo.id} className="inputtext">
                <div className="input-text">{todo.inputText}</div>
                <div className="input-cate">{todo.inputCategory}</div>
            </div>
            <div className='date-btn'>{todo.inputDate}</div>
            <div className='code-btn'>{todo.inputCode}</div>

            <div className='piece-btn'>
                <div className={dangerpiecex}>{todo.inputPiece} &nbsp; <i class="fa-solid fa-arrow-trend-up"></i> <i class="fa-solid fa-arrow-trend-down"></i></div>
            </div>
            <div className='price-btn'>${todo.inputPrice}</div>


            {deletediv ? <div className="delete-div">
                <div className="delete-view">
                    <div className="delete-text">Bu ürünü silmeyi onaylıyor musunuz?</div>
                    <div className="delete-buttonxc">
                        <button className="delete-click-button" onClick={() => { handleRemove(todo.id) }}>Evet</button>
                        <button className="delete-close-button" onClick={deleteViewFuncClose}>Hayır</button>
                    </div>
                </div>
            </div> : ""}


            {detaildiv ? <div className="detail-div">
                <div className="detail-view">
                    <div className="detail-view-one">
                        <div className="detail-div-state">
                            <div className="detail-text-div">Marka/Model Bilgisi</div>
                            <div className="detail-date-div">Ürünün Eklenme Tarihi</div>
                            <div className="detail-code-div">Ürünün Barkodu &nbsp;  <i title="Lütfen bir barkod okuyucu cihaz eşleştirin!" class="fa-solid fa-circle-exclamation fa-fade"></i> </div>
                            <div className="detail-piece-div">Stoktaki Ürün Adedi</div>
                            <div className="detail-comment-div">Ürünün Açıklaması</div>
                        </div>
                        <div className="detail-div-value">
                            <div className="detail-text-value">{todo.inputText}</div>
                            <div className="detail-date-value">{todo.inputDate} ({gün}&nbsp;{ayIsmi})</div>
                            <div className="detail-code-value">{todo.inputCode}</div>
                            <div className="detail-piece-value">{todo.inputPiece}</div>
                            <div className="detail-comment-value">{todo.inputComment}</div>
                        </div>
                    </div>

                    <div className="detail-view-two">



                        <button className="detail-qr-button" onClick={() => { handleUpdateData(); openBuyViewFunc(); }}>Son Alımlar</button>
                        <button className="detail-bar-button" onClick={() => { handleUpdateData(); openSalesViewFunc(); }}>Son Satışlar</button>
                        <button className="detail-close-button" onClick={detailViewFuncClose}>Sekmeyi Kapat</button>

                    </div>




                </div>
            </div> : ""}













            <div className="positive-div">
                <button onClick={openBuyAddFunc} title="Alış yap" className="positive-button"></button>
            </div>
            <div className="negative-div">
                <button onClick={openSalesAddFunc} title="Satış yap" className="negative-button"></button>
            </div>

            <div className="more-menu-div">
                <button className="morebutton">


                    <div className="more-div">


                        <button onClick={detailViewFunc}>
                            <div className="button-more-icon"><i class="fa-solid fa-eye"></i></div>
                            <div className="button-more-text">Ayrıntıları Gör</div>
                        </button>



                        <button title="Barcode oluştur" onClick={() => { handleUpdateData(); barCodeFunc(); }}>
                            <div className="button-more-icon"><i class="fa-solid fa-barcode"></i></div>
                            <div className="button-more-text">Barkod Oluştur</div>
                        </button>




                        <button title="QR Code oluştur" onClick={() => { handleUpdateData(); qrCodeFunc(); }}>
                            <div className="button-more-icon"><i class="fa-solid fa-qrcode"></i></div>
                            <div className="button-more-text">QR Kod Oluştur</div>
                        </button>



                        <button title="Ürünü güncelle" className='edit-btn' onClick={editViewFunc}>

                            <div className="button-more-icon"> <i class="fa-solid fa-pen"></i></div>
                            <div className="button-more-text">Ürünü Güncelle</div>


                        </button>




                        <button title="Ürünü sil" className='trash-btn' onClick={deleteViewFunc}>
                            <div className="button-more-icon"> <i class="fa-solid fa-trash"></i></div>
                            <div className="button-more-text">Ürünü Sil</div>

                        </button>
                    </div>



                </button>
            </div>



        </div>

    )
};





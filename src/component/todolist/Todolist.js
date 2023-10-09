import React, { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import Todo from "../todo/Todo";
import { Link } from 'react-router-dom';
import "./todolist.css"
import QRCode from "react-qr-code";
import Barcode from 'react-barcode';
import Operation from "../operation/Operation";
import optionsArray from "./categories/Categories"
import Notification from "../notification/Notification"




// grafik sekmesini ayarla
// tema düzenle
// pop-upları düzenle
// aylık satılan ürün adedi
// aylık alınan ürün adedi
// aylık kazanılan para
// aylık harcanan para
// aylık kar-zarar
// stoğa eklenen ürün sayısı
// stoktan çıkan ürün sayısı
// grafikler sekmesine eklenecekler => son eklenen ürünler - son satılan ürünler- son alınan ürünler
// ürünleri gizle - tüm ürünleri sil - stoğu azalan ürünleri gizle - stoğu 
// bildirimler bölümü, alım satım yapıldığında bildirim entitysi oluştur/ kutunun üstüne 1 sayısı yazdır bildirim olunca
// appcontext düzenle

function TodoList() {
  const {
    todos,
    deleteOneProduct,
    uyariIki,
    setUyariIki,
    uyariBir,
    setUyariBir,
    postOneProduct,
    openScreen,
    setOpenScreen,
    openViewFunc,
    closeViewFunc,
    valuesx,
    setValuesx,
    setSelectedEmployee,
    selectedEmployee,
    putOneProduct,
    handleSubmit,
    handleChange,
    handleSubmit2,
    values2,
    setValue2,
    handleChange2,
    editScreen,
    editViewFunc,
    closeViewFunc2,
    qrcodediv,
    qrCodeFunc,
    receivedData,
    setReceivedData,
    qrCodeFuncClose,
    setEditScreen,
    barCodeFunc,
    barcodediv,
    barCodeFuncClose,
    setList,
    moreViewFunc,
    moreButton,
    settos,
    setQrcodediv,
    setBarcodediv,
    detailDiv,
    setDetaildiv,
    deleteAllProducts,
    buydiv,
    setBuydiv,
    operat,
    openBuyViewFunc,
    openBuyAdd,
    setOpenBuyAdd,
    purchaseSubmit,
    purchaseSubmit2,
    openSalesAdd,
    purchaseChange,
    valuesPurchase,
    setValuesPurchase,
    setBuyProductName,
    buyProductName,
    setTodonunpraysi,
    setUpdatedTodoId,
    valuesTwo,
    setValuesTwo,
    updatedTodoId,
    noti,
    setNoti,
    notiCircle,
    setNotiCircle,
    deleteAllNotifications,
    createOneNotification,
    setOpenSalesAdd,
    salesdiv,
    setSalesdiv,
    notificationOpenViewFunc,
    notificationView,
    setNotificationView,
    deleteAllNotification,
    noti2,
    setOpenProfileDiv,
    openProfileDiv,
    openProfileFunc,
    buyCloseViewFunc,
    buyDeleteViewFunc,
    setDeleteOp,
    deleteOp
  } = useContext(AppContext);

  const barCodeFuncClose2 = () => {
    setSalesdiv(false)
  }






  const [dots, setDots] = useState(true)







  const handleChangeTwo = (e) => {
    setValuesTwo({
      ...valuesTwo,
      [e.target.name]: e.target.value
    });
  };





  const purchaseCloseView = () => {
    setOpenBuyAdd(false)
    setOpenSalesAdd(false);
    setValuesPurchase({
      id: 0,
      operationName: "buy",
      operationCompany: null,
      operationProduct: null,
      operationDate: null,
      operationPiece: null,
      operationTotalfee: null
    })
  }





  const handleDropDown = (categoryProp) => {
    setValuesx({
      ...valuesx,
      inputCategory: categoryProp
    })
    setIsOpenDropdown(false)
  }

  const handleDropUpdateDown = (categoryProps) => {
    setValuesTwo({
      ...valuesTwo,
      inputCategory: categoryProps
    })
    setIsOpenDropdown(false)
  }


  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const openCategoryViewFunc = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (isOpenSearch && !e.target.closest("#myInputDiv")) {
        setIsOpenSearch(false);
      }
    };

    window.addEventListener("click", closeOnOutsideClick);

    return () => {
      window.removeEventListener("click", closeOnOutsideClick);
    };
  }, [isOpenSearch]);


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

  const searchOpenFunc = () => {
    setIsOpenSearch(!isOpenSearch)
  }

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

  const deleteButtonClickConfirm = () => {
    setConfirmDeleteAll(!confirmDeleteAll)
  }

  const [openViewDeleteAll, setOpenViewDeleteAll] = useState(false);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);

  const deleteHandleAll = () => {
    if (confirmDeleteAll == true) {
      deleteAllProducts();
      setOpenViewDeleteAll(false);
      setConfirmDeleteAll(false)
      const notificationData = {
        id: 0,
        notificationText: "Tüm ürünlerinizi sildiniz!"
        //`${valuesPurchase.operationCompany} ad ${updatedPurchaseData.operationPiece} adet ${valuesPurchase.operationProduct} alımı yaptınız.  `

      }
      createOneNotification(notificationData)
    } else {

    }

  }

  const openViewDeleteAllFunc = () => {
    setOpenViewDeleteAll(true)
  }

  const closeViewDeleteAllFunc = () => {
    setOpenViewDeleteAll(false)
    setConfirmDeleteAll(false)
  }

  var date = new Date();


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

  const todostoday = todos
    .filter(emp => emp.inputDate === yil + "-" + ay + "-" + gün)

  const todosdelete = todos
    .filter(emp => emp.inputPiece === 0)


  const todoslittle = todos
    .filter(emp => emp.inputPiece <= settos[0]?.settingDanger)






  useEffect(() => {
    setValuesTwo({
      inputId: receivedData.inputId,
      inputPiece: receivedData.inputPiece,
      inputText: receivedData.inputText,
      inputCode: receivedData.inputCode,
      inputDate: receivedData.inputDate,
      inputComment: receivedData.inputComment,
      inputPrice: receivedData.inputPrice,
      inputCategory: receivedData.inputCategory
    });
  }, [receivedData]);

  const handleSubmitTwo = () => {
    const updatedData = {
      ...receivedData,
      inputId: receivedData.inputId,
      inputPiece: valuesTwo.inputPiece,
      inputText: valuesTwo.inputText,
      inputCode: valuesTwo.inputCode,
      inputDate: valuesTwo.inputDate,
      inputComment: valuesTwo.inputComment,
      inputPrice: valuesTwo.inputPrice,
      inputCategory: valuesTwo.inputCategory
    };
    putOneProduct(receivedData.inputId, updatedData);
    setUpdatedTodoId(false)
    window.location.reload();
  };







  const searchChange = (e) => {
    setSearchWord(
      e.target.value,
    );
  }

  const [filter, setFilter] = useState(0);
  const [filterDiv, setFilterDiv] = useState(true);
  const [filterDiv2, setFilterDiv2] = useState(true);

  const nofilter = () => {
    setFilter(0)
    setFilterDiv(true)
    setFilterDiv2(true)
  }
  const hundred = () => {
    setFilter(1)
    setFilterDiv(true)
    setFilterDiv2(true)
  }

  const twohundred = () => {
    setFilter(2)
    setFilterDiv(true)
    setFilterDiv2(true)
  }

  const threehundred = () => {
    setFilter(3)
    setFilterDiv(true)
    setFilterDiv2(true)
  }


  const [searchWord, setSearchWord] = useState("")
  const searchWords = searchWord.toLowerCase().split(" ");

  const filteredTodos =
    filter === 1
      ? todos
        .filter(emp =>
          (emp.inputPiece <= 100 && emp.inputPiece >= 0) &&
          (searchWord === "" ||
            searchWords.every(word =>
              emp.inputText.toLowerCase().includes(word) ||
              emp.inputCode.toString().includes(word) ||
              emp.inputPiece.toString().includes(word) ||
              emp.inputDate.includes(word)
            )
          )
        )
      : filter === 2
        ? todos
          .filter(emp => emp.inputPiece > 100 && emp.inputPiece <= 500 &&
            (searchWord === "" ||
              searchWords.every(word =>
                emp.inputText.toLowerCase().includes(word) ||
                emp.inputCode.toString().includes(word) ||
                emp.inputPiece.toString().includes(word) ||
                emp.inputDate.includes(word)
              )
            ))
        : filter === 3
          ? todos.filter(emp => emp.inputPiece > 500 && emp.inputPiece <= 1000 &&
            (searchWord === "" ||
              searchWords.every(word =>
                emp.inputText.toLowerCase().includes(word) ||
                emp.inputCode.toString().includes(word) ||
                emp.inputPiece.toString().includes(word) ||
                emp.inputDate.includes(word)
              )
            ))
          : todos
            .filter(emp => searchWord === "" ||
              searchWords.every(word =>
                emp.inputText.toLowerCase().includes(word) ||
                emp.inputCode.toString().includes(word) ||
                emp.inputPiece.toString().includes(word) ||
                emp.inputDate.includes(word)
              ));

  const allTodos = filteredTodos.length === 0 ? (
    <div className="no-content-no">
      <div className="no-content-svg"></div>
      <div className="no-content-text">Product Not Found</div>
      <div className="no-content-button"></div>
    </div>
  ) :
    filteredTodos.map((emp, index) => (
      <Todo

        key={index}
        settos={settos}
        todo={emp}
        todos={todos}
        setList={setList}
        editViewFunc={editViewFunc}
        closeViewFunc={closeViewFunc}
        qrCodeFunc={qrCodeFunc}
        barCodeFunc={barCodeFunc}
        setReceivedData={setReceivedData}
        setEditScreen={setEditScreen}
        deleteOneProduct={deleteOneProduct}
        moreViewFunc={moreViewFunc}
        moreButton={moreButton}
        setBarcodediv={setBarcodediv}
        setQrcodediv={setQrcodediv}
        setBuydiv={setBuydiv}
        operat={operat}
        receivedData={receivedData}
        openBuyViewFunc={openBuyViewFunc}
        setOpenBuyAdd={setOpenBuyAdd}
        setBuyProductName={setBuyProductName}
        buyProductName={buyProductName}
        valuesPurchase={valuesPurchase}
        setValuesPurchase={setValuesPurchase}
        setTodonunpraysi={setTodonunpraysi}
        setUpdatedTodoId={setUpdatedTodoId}
        createOneNotification={createOneNotification}
        setOpenSalesAdd={setOpenSalesAdd}
        setSalesdiv={setSalesdiv}
        salesdiv={salesdiv}
        deleteOp={deleteOp}
        setDeleteOp={setDeleteOp}

      />
    ))

  const filteredOperation = operat.filter(emp => emp.operationProduct === receivedData.inputText && emp.operationName === "buy")
    .map((opa, indexx) => (
      <Operation

        key={indexx}
        operation={opa}

      />
    ))

  const filteredOperation2 = operat.filter(emp => emp.operationProduct === receivedData.inputText && emp.operationName === "sales")
    .map((opa, indexx) => (
      <Operation

        key={indexx}
        operation={opa}

      />
    ))





  const filterButton = () => {
    setFilterDiv(!filterDiv)
  }

  var todouzunluk = todos.length

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => !prevDots);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);










  return (
    <div className='todoanasayfa'>


      <div className="stock-control-div">
        <div className="stock-control-panel">
          <div className="stock-functional-menu">

            <div className="stock-empty-menu-div">
              <div className="stock-office-content">
                <div className="stock-office-logo"></div>
                <div className="stock-office-name">Starch</div>
              </div>
            </div>

            <div className="stock-menu-button"><a href="/dashboard">
              <div className="stock-ticket-dashicon"></div>
              <div className="stock-ticket-text">Dashboard</div>
            </a></div>

            <div className="stock-menu-button"><a className="stock-active-button" href="/mypage">
              <div className="stock-ticket-stockicon"></div>
              <div className="stock-ticket-tex-first">Stock</div>
              <div className="stock-ticket-number-co">
                <div className="stock-ticket-lenght-circle">{todouzunluk}</div>
              </div>
            </a></div>

            <div className="stock-menu-button"><a href="/chart">
              <div className="stock-ticket-charticon"></div>
              <div className="stock-ticket-text">Charts</div>
            </a></div>

            <div className="stock-menu-button"><a href="/customers">
              <div className="stock-ticket-customericon"></div>
              <div className="stock-ticket-text">Customers</div>
            </a></div>


            <div className="stock-menu-button"><a href="/support">
              <div className="stock-ticket-supporticon"></div>
              <div className="stock-ticket-text">Support</div>
            </a></div>
          </div>



          <div className="stock-user-account">

            <div className="stock-menu-button"><a href="/setting">
              <div className="stock-ticket-settingicon"></div>
              <div className="stock-ticket-text">Settings</div>
            </a></div>

          </div>
        </div>
      </div>













      <div className="stock-todo-contain">
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
                <input placeholder="Ürün Ara..." value={searchWord} onChange={searchChange} id="myInput" type="text" className={`${isOpenSearch ? "stock-open-search" : "stock-close-search"} `} />
                <button className={`${isOpenSearch ? "stock-open-but-search" : "stock-close-but-search"} `} id="myButton" onClick={searchOpenFunc}>

                </button></div>
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
                </div> : ""}

              </button></div>
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
            <div className="stock-category-text">Stock</div>
            <div className="stock-new-sto-add">
              <button onClick={openViewFunc}>
                <div className="stock-new-sto-text">Add new</div>
                <div className="stock-new-sto-ico"><i class="fa-solid fa-plus"></i></div>
              </button>
            </div>
          </div>
        </div>

        <div className="stock-map-to-div">
          <div className="stock-map-todivic">
            <div className="stock-pro-content">
              <div className="stock-pro-text-div">All Products ({todouzunluk})</div>
              <div className="stock-pro-sett-div"><button onClick={openViewDeleteAllFunc}></button></div>
            </div>

            <div className="stock-pro-map-tod">
              <div className="stock-mapping-div">
                <div className="stock-bilgi-divi">
                  <div title="Category" className="stock-category-name-text"><i class="fa-solid fa-grip"></i></div>
                  <div className="stock-product-name-text">Product</div>
                  <div className="stock-date-name-text">Rise Date</div>
                  <div className="stock-code-name-text">Product ID</div>
                  <div className="stock-piece-name-text">


                    {filterDiv ?
                      <button onClick={filterButton}>
                        {filter === 0 && "Piece"}
                        {filter === 1 && "0-100"}
                        {filter === 2 && "100-500"}
                        {filter === 3 && "500-1000"} &nbsp;
                        <i class="fa-solid fa-sort"></i>
                      </button>

                      : <button onClick={filterButton}>
                        {filter === 0 && "Piece"}
                        {filter === 1 && "0-100"}
                        {filter === 2 && "100-500"}
                        {filter === 3 && "500-1000"} &nbsp; <i class="fa-solid fa-sort"></i>
                        <div className="open-filter-div">
                          <button onClick={nofilter}>No Filter</button>
                          <button onClick={hundred}>0-100</button>
                          <button onClick={twohundred}>100-500</button>
                          <button onClick={threehundred}>500-1000</button>
                        </div>
                      </button>}


                  </div>
                  <div className="stock-price-name-text">Price &nbsp; <i class="fa-solid fa-sort"></i></div>
                  <div className="stock-empty-name-text"></div>
                </div>
                {
                  allTodos
                }
              </div>
            </div>

          </div>
        </div>



        {/* <div className="toddos">
          <div className="tod-comp">

          <div className="todo-bilgi">
            <div title="Stok uyarı bildirimi" className="danger-bilgi">
            <i class="fa-solid fa-circle-exclamation"></i>
            </div>
            <div className='date-bilgi'>tarih</div>
            <div className="text-bilgi">marka/model bilgisi</div>

            <div className='code-bilgi'>barkod numarası</div>
            <div className='piece-bilgi'>adet</div>
          </div>


          <div className="map-todos">
            
          </div>
          </div>
          

        </div> */}

      </div>













      {openScreen ?
        <div className="stock-black-open-view">
          <div className="stock-open-view">

            <div className="stock-todo-list">



              <div className="product-add-input-name">
                <input
                  className="stock-input-todo"
                  id="inputText"
                  name="inputText"
                  autoComplete="off"
                  placeholder="Ürün ismi giriniz!"
                  type="text"
                  onChange={handleChange}
                  value={valuesx?.inputText}
                />
              </div>

              <div className="product-add-input-date-code">
                <input
                  className="stock-date-todo"
                  id="inputDate"
                  name="inputDate"
                  type="date"
                  onChange={handleChange}
                  value={valuesx?.inputDate}
                />

                <input
                  className="stock-code-todo"
                  id="inputCode"
                  name="inputCode"
                  type="number"
                  inputMode="none"
                  onChange={handleChange}
                  value={valuesx?.inputCode}
                  placeholder="Barkod Numarası Giriniz!"
                  autoComplete="off"
                />

              </div>

              <div className="product-add-input-piece-price">
                <input
                  className="stock-piece-todo"
                  id="inputPiece"
                  name="inputPiece"
                  type="number"
                  inputMode="none"
                  onChange={handleChange}
                  value={valuesx?.inputPiece}
                  placeholder="Ürün adedi giriniz!"
                  autoComplete="off"
                />

                <input
                  className="stock-price-todo"
                  id="inputPrice"
                  name="inputPrice"
                  type="number"
                  inputMode="none"
                  onChange={handleChange}
                  value={valuesx?.inputPrice}
                  placeholder="Ürün fiyatı giriniz!"
                  autoComplete="off"
                />
              </div>
              <div className="product-add-input-category">

                <input
                  className="stock-category-todo"
                  id="inputCategory"
                  name="inputCategory"
                  type="text"
                  inputMode="none"
                  onChange={handleChange}
                  value={valuesx?.inputCategory}
                  placeholder="Ürün kategorisi seçiniz!"
                  autoComplete="off"
                  readOnly
                />
                <button id="toogleDropdown" onClick={openCategoryViewFunc} className="stock-category-button">{isOpenDropdown ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}</button>
                {isOpenDropdown ? <div className="stock-dropdown-options">
                  {optionsArray.map((option) => (<div className="opti-open-div"><button onClick={() => handleDropDown(option.optionName)} id={option.id} className="option">{option.optionName}</button></div>))}
                </div> : ""}
              </div>
              <div className="product-add-input-comment">

                <textarea className="stock-comment-todo"
                  id="inputComment"
                  name="inputComment"
                  onChange={handleChange}
                  value={valuesx?.inputComment}
                  placeholder="Ürün açıklaması giriniz! (Opsiyonel)"
                  maxLength={300}
                />
              </div>
              <div className="product-add-input-buttons">
                <button className='stock-add-button' role="button" onClick={handleSubmit}>Ekle</button>
                <button className="stock-close-button" onClick={closeViewFunc}>Çık</button>
              </div>
            </div>

          </div>
        </div> : ""}

      {updatedTodoId ? <div className="stock-black-open-view">
        <div className="stock-open-view">

          <div className="stock-todo-list">
            <form onSubmit={handleSubmitTwo}>



              <div className="product-add-input-name">
                <input
                  className="stock-input-todo"
                  id="inputText"
                  name="inputText"
                  autoComplete="off"
                  placeholder="Ürün ismi giriniz!"
                  type="text"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputText}
                />
              </div>

              <div className="product-add-input-date-code">
                <input
                  className="stock-date-todo"
                  id="inputDate"
                  name="inputDate"
                  type="date"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputDate}
                />

                <input
                  className="stock-code-todo"
                  id="inputCode"
                  name="inputCode"
                  type="number"
                  inputMode="none"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputCode}
                  placeholder="Barkod Numarası Giriniz!"
                  autoComplete="off"
                />

              </div>

              <div className="product-add-input-piece-price">
                <input
                  className="stock-piece-todo"
                  id="inputPiece"
                  name="inputPiece"
                  type="number"
                  inputMode="none"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputPiece}
                  placeholder="Ürün adedi giriniz!"
                  autoComplete="off"
                />

                <input
                  className="stock-price-todo"
                  id="inputPrice"
                  name="inputPrice"
                  type="number"
                  inputMode="none"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputPrice}
                  placeholder="Ürün fiyatı giriniz!"
                  autoComplete="off"
                />
              </div>
              <div className="product-add-input-category">

                <input
                  className="stock-category-todo"
                  id="inputCategory"
                  name="inputCategory"
                  type="text"
                  inputMode="none"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputCategory}
                  placeholder="Ürün kategorisi seçiniz!"
                  autoComplete="off"
                  readOnly
                />
                <div id="toogleDropdown" onClick={openCategoryViewFunc} className="stock-category-button">{isOpenDropdown ? <i class="fa-solid fa-caret-up"></i> : <i class="fa-solid fa-caret-down"></i>}</div>
                {isOpenDropdown ? <div className="stock-dropdown-options">
                  {optionsArray.map((option) => (<div className="opti-open-div"><button onClick={() => handleDropUpdateDown(option.optionName)} id={option.id} className="option">{option.optionName}</button></div>))}
                </div> : ""}
              </div>
              <div className="product-add-input-comment">

                <textarea className="stock-comment-todo"
                  id="inputComment"
                  name="inputComment"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputComment}
                  placeholder="Ürün açıklaması giriniz! (Opsiyonel)"
                  maxLength={200}
                />
              </div>
              <div className="product-add-input-buttons">
                <button className='stock-add-button' role="button" type='submit'>Güncelle</button>
                <Link to="/mypage"><button className="stock-close-button" onClick={closeViewFunc2}>Çık</button></Link>
              </div>

            </form>
          </div>

        </div>
      </div> : ""}



      {/* {editScreen ?
        <div className="stock-black-open-view">
          <div className="stock-open-view">

            <div className="stock-todo-list">

              <form onSubmit={handleSubmitTwo}>
                <input

                  className="input-todo"
                  id="inputText"
                  name="inputText"
                  autoComplete="off"
                  placeholder="Ürün ismi giriniz!"
                  type="text"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputText}
                />

                <input
                  className="date-todo"
                  id="inputDate"
                  name="inputDate"
                  type="date"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputDate}
                />

                <input
                  className="code-todo"
                  id="inputCode"
                  name="inputCode"
                  type="number"
                  inputMode="none"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputCode}
                  placeholder="Barkod Numarası Giriniz!"
                  autoComplete="off"
                />

                <input
                  className="piece-todo"
                  id="inputPiece"
                  name="inputPiece"
                  type="number"
                  inputMode="none"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputPiece}
                  placeholder="Ürün adedi giriniz!"
                  autoComplete="off"
                />

                <textarea className="comment-todo"
                  id="inputComment"
                  name="inputComment"
                  onChange={handleChangeTwo}
                  value={valuesTwo?.inputComment}
                  placeholder="Ürün açıklaması giriniz! (Opsiyonel)"
                  maxLength={200}
                />

                <div className="button-input">
                  <button className='todo-add-button' role="button" type="submit">Güncelle</button>
                  <button className="close-button" onClick={closeViewFunc2}>Çık</button>
                </div>


              </form>

            </div>

          </div>
        </div> : ""} */}

      {openBuyAdd ? <div className="black-purchasing-screen">
        <div className="purchase-view">


          <div className="purchase-input-div">
            <input
              className="purchase-company"
              inputMode="none"
              type="text"
              id="operationCompany"
              name="operationCompany"
              onChange={purchaseChange}
              value={valuesPurchase?.operationCompany}
              placeholder="Alım Yapılan Şirket!"
              autoComplete="off"
            />
          </div>

          <div className="purchase-twoinput-div">
            <input
              className="purchase-date"
              type="date"
              id="operationDate"
              name="operationDate"
              inputMode="none"
              onChange={purchaseChange}
              value={valuesPurchase?.operationDate}
              placeholder="Alım Tarihi!"
              autoComplete="off"
            />

            <input
              className="purchase-piece"
              type="number"
              inputMode="none"
              id="operationPiece"
              name="operationPiece"
              onChange={purchaseChange}
              value={valuesPurchase?.operationPiece}
              placeholder="Alım Adedi Giriniz!"
              autoComplete="off"
            />
          </div>

          <div className="purchase-warning">
            <i class="fa-solid fa-fade fa-circle-exclamation"></i> &nbsp; &nbsp; &nbsp; Girilen adet ilgili ürünün stoklarına eklenecektir!

          </div>

          <div className="purchase-twoinput-div">
            <button className="purchase-submit-button" onClick={purchaseSubmit}>Kaydet</button>
            <button className="purchase-close-button" onClick={purchaseCloseView}>Kapat</button>
          </div>

        </div>
      </div> : ""}

      {openSalesAdd ? <div className="black-purchasing-screen">
        <div className="purchase-view">


          <div className="purchase-input-div">
            <input
              className="purchase-company"
              inputMode="none"
              type="text"
              id="operationCompany"
              name="operationCompany"
              onChange={purchaseChange}
              value={valuesPurchase?.operationCompany}
              placeholder="Satış Yapılan Şirket!"
              autoComplete="off"
            />
          </div>

          <div className="purchase-twoinput-div">
            <input
              className="purchase-date"
              type="date"
              id="operationDate"
              name="operationDate"
              inputMode="none"
              onChange={purchaseChange}
              value={valuesPurchase?.operationDate}
              placeholder="Satış Tarihi!"
              autoComplete="off"
            />

            <input
              className="purchase-piece"
              type="number"
              inputMode="none"
              id="operationPiece"
              name="operationPiece"
              onChange={purchaseChange}
              value={valuesPurchase?.operationPiece}
              placeholder="Satış Adedi Giriniz!"
              autoComplete="off"
            />
          </div>

          <div className="purchase-warning">
            <i class="fa-solid fa-fade fa-circle-exclamation"></i> &nbsp; &nbsp; &nbsp; Girilen adet ilgili ürünün stoklarından düşülecektir!

          </div>

          <div className="purchase-twoinput-div">
            <button className="purchase-submit-button" onClick={purchaseSubmit2}>Kaydet</button>
            <button className="purchase-close-button" onClick={purchaseCloseView}>Kapat</button>
          </div>

        </div>
      </div> : ""}

      {qrcodediv ? <div className="stock-qrcode-black">
        <div className="stock-qr-code">
          <QRCode
            size={250}
            bgColor="white"
            fgColor="black"
            value={`${receivedData.inputCode}`}
          />
          <button onClick={qrCodeFuncClose}>Kapat</button>
        </div>

      </div> : ""}

      {barcodediv ? <div className="stock-barcode-black">
        <div className="stock-bar-code">
          <Barcode width={3} height={110} value={receivedData.inputCode} />
          <button onClick={barCodeFuncClose}>Kapat</button>
        </div>

      </div> : ""}

      {buydiv ? <div className="buy-black">
        <div className="buy-div-view">
          <div className="buy-list">
            <div className="buy-detail">
              <div className="buy-date-detail">Alım Tarihi</div>
              <div className="buy-company-detail">Alım Yapılan Şirket</div>
              <div className="buy-product-detail">Alınan Ürün</div>
              <div className="buy-piece-detail">Alınan Adet</div>
              <div className="buy-total-detail">Toplam Gider</div>
            </div>
            <div className="buy-mapping-eleman">
              {
                filteredOperation
              }
            </div>


          </div>
          <div className="buy-detail-button">
            <button className="buy-close-view" onClick={buyCloseViewFunc}>Sekmeyi Kapat</button>
            <button className="buy-alldelete-button" onClick={buyDeleteViewFunc}>Tüm Kayıtları Sil</button>
          </div>

        </div>
      </div> : ""}

      {salesdiv ? <div className="buy-black">
        <div className="buy-div-view">
          <div className="buy-list">
            <div className="buy-detail">
              <div className="buy-date-detail">Satış Tarihi</div>
              <div className="buy-company-detail">Satış Yapılan Şirket</div>
              <div className="buy-product-detail">Satılan Ürün</div>
              <div className="buy-piece-detail">Satılan Adet</div>
              <div className="buy-total-detail">Toplam Gelir</div>
            </div>
            <div className="buy-mapping-eleman">
              {
                filteredOperation2
              }
            </div>


          </div>
          <div className="buy-detail-button">
            <button className="buy-close-view" onClick={barCodeFuncClose2}>Sekmeyi Kapat</button>
            <button className="buy-alldelete-button" onClick={barCodeFuncClose2}>Tüm Kayıtları Sil</button>
          </div>

        </div>
      </div> : ""}

      {openViewDeleteAll ? <div className="stock-black-delete-all-div">
        <div className="stock-delete-view-div">
          <div className="stock-delete-text">Onaylıyor musunuz?</div>
          <div className="stock-delete-teconf">
            <div className="stock-delete-confirm">
              {confirmDeleteAll ? <button onClick={deleteButtonClickConfirm} className="stock-full-button-delete">
                <div className="delete-minnak-div"></div>
              </button> : <button onClick={deleteButtonClickConfirm} className="stock-empty-button-delete"></button>}
            </div>
            <div className="stock-delete-confirm-text">
              Tüm ürünleri silmeyi onaylayarak mevcut ürünlerinizi <br /> kaybedeceğinizi, veri kaybı yaşama ihtimalinizi ve tüm <br /> sorumluluğu üstleneceğinizi kabul etmiş olursunuz!
            </div>
          </div>

          <div className="stock-delete-conf-button">
            <button onClick={deleteHandleAll}>Hepsini Sil</button>
            <button className="stock-delete-exit-button" onClick={closeViewDeleteAllFunc}>Kapat</button>
          </div>

        </div>
      </div> : ""}




      <div className="tum-uyarilar">
        {uyariBir ? <div className="popup-container">
          <div className="popup-icon"><div className="popup-exclamation-circle"><i class="fa-solid fa-exclamation"></i></div></div>
          <div className="popup-text">Lütfen boş alan bırakmayın.</div>
        </div> : ""}
        {uyariIki ? <div className="popup-container">
          <div className="popup-icon"><div className="popup-check-circle"><i class="fa-solid fa-check"></i></div></div>
          <div className="popup-text">Ürün başarıyla eklendi.</div>
        </div> : ""}
      </div>
    </div>
  )
}



export default TodoList;
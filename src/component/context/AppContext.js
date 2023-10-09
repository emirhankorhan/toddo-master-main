import { createContext, useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import SettingService from "../../services/SettingService";
import OperationService from "../../services/OperationService";
import NotificationService from "../../services/NotificationService";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [todos, setList] = useState([]);
  const [noti, setNoti] = useState([]);
  const [operat, setOperation] = useState([]);
  const [settos, setSettos] = useState([]);
  const [uyariBir, setUyariBir] = useState(false);
  const [uyariIki, setUyariIki] = useState(false);
  const [deletePost, setDeletePost] = useState(0);
  const [openScreen, setOpenScreen] = useState(false);
  const [editScreen, setEditScreen] = useState(false);
  const [qrcodediv, setQrcodediv] = useState(false);
  const [buydiv, setBuydiv] = useState(false);
  const [salesdiv, setSalesdiv] = useState(false);
  const [buyProductName, setBuyProductName] = useState("");
  const [todonunpraysi, setTodonunpraysi] = useState("");
  const [updatedTodoId, setUpdatedTodoId] = useState(false)
  const [barcodediv, setBarcodediv] = useState(false);
  const [openBuyAdd, setOpenBuyAdd] = useState(false);
  const [openSalesAdd, setOpenSalesAdd] = useState(false);
  const [deleteOp, setDeleteOp] = useState("");
  const [notiCircle, setNotiCircle] = useState(false);
  const [receivedData, setReceivedData] = useState({
    inputId: 0,
    inputPiece: null,
    inputText: "",
    inputCode: null,
    inputDate: null,
    inputComment: "",
    inputPrice: null,
    inputCategory: ""
  }
  );

  const [settingData, setSettingData] = useState({
    settingId: 1,
    settingDanger: 0
  }
  );

  const productService = new ProductService();
  const settingService = new SettingService();
  const operationService = new OperationService();
  const notificationService = new NotificationService();

  const qrCodeFunc = () => {
    setQrcodediv(true)
  }
  const barCodeFunc = () => {
    setBarcodediv(true)
  }

  const qrCodeFuncClose = () => {
    setQrcodediv(false)
  }

  const barCodeFuncClose = () => {
    setBarcodediv(false)

  }

  const buyCloseViewFunc = () => {
    setBuydiv(false)
  }




  const openViewFunc = () => {
    setOpenScreen(true)
  }



  const closeViewFunc = () => {
    setOpenScreen(false)
    setValuesx({
      inputText: "",
      inputDate: "",
      inputCode: null,
      inputPiece: null,
      inputComment: "",
      inputPrice: null,
      inputCategory: ""
    });
  }

  const closeViewFunc2 = () => {
    setUpdatedTodoId(false)
  }

  const purchaseSubmit = () => {
    const updatedPurchaseData = {
      id: 0,
      operationName: "buy",
      operationCompany: valuesPurchase.operationCompany,
      operationProduct: valuesPurchase.operationProduct,
      operationDate: valuesPurchase.operationDate,
      operationPiece: valuesPurchase.operationPiece,
      operationTotalfee: valuesPurchase.operationPiece * todonunpraysi
    };
    postOneOperation(updatedPurchaseData);


    const updatedData2 = {
      ...receivedData,
      inputId: receivedData.inputId,
      inputPiece: parseInt(valuesTwo.inputPiece) + parseInt(updatedPurchaseData.operationPiece),
      inputText: valuesTwo.inputText,
      inputCode: valuesTwo.inputCode,
      inputDate: valuesTwo.inputDate,
      inputComment: valuesTwo.inputComment,
      inputPrice: valuesTwo.inputPrice,
      inputCategory: valuesTwo.inputCategory
    };
    putOneProduct(receivedData.inputId, updatedData2);

    const notificationData = {
      id: 0,
      notificationText: `Bir miktar ${valuesPurchase.operationProduct} alımı yaptınız.  `


    }
    createOneNotification(notificationData)




    setOpenBuyAdd(false);
    setValuesPurchase({
      id: 0,
      operationName: "buy",
      operationCompany: null,
      operationProduct: null,
      operationDate: null,
      operationPiece: null,
      operationTotalfee: null
    })


    window.location.reload();


  };










  const purchaseSubmit2 = () => {
    const updatedPurchaseData = {
      id: 0,
      operationName: "sales",
      operationCompany: valuesPurchase.operationCompany,
      operationProduct: valuesPurchase.operationProduct,
      operationDate: valuesPurchase.operationDate,
      operationPiece: valuesPurchase.operationPiece,
      operationTotalfee: valuesPurchase.operationPiece * todonunpraysi
    };
    postOneOperation(updatedPurchaseData);


    const updatedData2 = {
      ...receivedData,
      inputId: receivedData.inputId,
      inputPiece: parseInt(valuesTwo.inputPiece) - parseInt(updatedPurchaseData.operationPiece),
      inputText: valuesTwo.inputText,
      inputCode: valuesTwo.inputCode,
      inputDate: valuesTwo.inputDate,
      inputComment: valuesTwo.inputComment,
      inputPrice: valuesTwo.inputPrice,
      inputCategory: valuesTwo.inputCategory
    };
    putOneProduct(receivedData.inputId, updatedData2);

    const notificationData = {
      id: 0,
      notificationText: `Bir miktar ${valuesPurchase.operationProduct} satışı yaptınız.  `


    }
    createOneNotification(notificationData)




    setOpenBuyAdd(false);
    setValuesPurchase({
      id: 0,
      operationName: "sales",
      operationCompany: null,
      operationProduct: null,
      operationDate: null,
      operationPiece: null,
      operationTotalfee: null
    })


    window.location.reload();


  };
























  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = str => !str?.trim().length;

       if (isEmpty(valuesx.inputText) || 
       isEmpty(valuesx.inputCode) || 
       isEmpty(valuesx.inputDate) || 
       isEmpty(valuesx.inputPiece) || 
       isEmpty(valuesx.inputPrice) || 
       isEmpty(valuesx.inputCategory)) {
         setUyariBir(true);
         setTimeout(() => {
           setUyariBir(false);
         }, 2000);
       }else{
      postOneProduct(valuesx);
      setUyariIki(true);
         setTimeout(() => {
           setUyariIki(false);
         }, 2000);
      const notificationData = {
        id: 0,
        notificationText: `${valuesx.inputText} adlı ürünü stoğunuza eklediniz!`
        //`${valuesPurchase.operationCompany} ad ${updatedPurchaseData.operationPiece} adet ${valuesPurchase.operationProduct} alımı yaptınız.  `
  
      }
      createOneNotification(notificationData)
      setValuesx({
        inputText: "",
        inputDate: "",
        inputCode: "",
        inputPiece: "",
        inputComment: "",
        inputPrice: "",
        inputCategory: ""
      });
    }
    

    


    
  };

  const [selectedEmployee, setSelectedEmployee] = useState({
    id: 0,
    inputText: "",
    inputDate: "",
    inputCode: 0,
    inputPiece: null,
    inputComment: "",
    inputPrice: null,
    inputCategory: ""
  });

  const [valuesx, setValuesx] = useState({
    id: 0,
    inputText: "",
    inputDate: "",
    inputCode: "",
    inputPiece: "",
    inputComment: "",
    inputPrice: "",
    inputCategory: ""
  });

  const [valuesPurchase, setValuesPurchase] = useState({
    id: 0,
    operationName: "buy",
    operationCompany: null,
    operationProduct: null,
    operationDate: null,
    operationPiece: null,
    operationTotalfee: null
  });

  const [valuesSet, setValuesSet] = useState({
    settingId: 0,
    settingDanger: 0
  });





  const handleChange = (e) => {
    setValuesx({
      ...valuesx,
      [e.target.name]: e.target.value,
    });
  };

  const purchaseChange = (e) => {
    setValuesPurchase({
      ...valuesPurchase,
      [e.target.name]: e.target.value,
    });

  };




  const buyDeleteViewFunc = () => {
    const filteredOperations = operat.filter((operation) => operation.operationProduct === receivedData.inputText);
    const filteredIds = filteredOperations.map((operation) => operation.id);
    if (filteredIds.length > 0) {
      filteredIds.forEach((id) => {
        deleteOneOperation(id);
      });
    }else{

    }
    window.location.reload();
  }



  const getAllProducts = () => {
    productService.getAllProducts().then((resp) => setList(resp));
  };

  const getAllNotifications = () => {
    notificationService.getAllNotifications().then((resp) => setNoti(resp));
  };

  const getAllOperations = () => {
    operationService.getAllOperations().then((resp) => setOperation(resp));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    getAllNotifications();
  }, []);

  useEffect(() => {
    getAllSettings();
  }, []);

  useEffect(() => {
    getAllOperations();
  }, []);


  const getAllSettings = () => {
    settingService.getAllSettings().then((resp) => setSettos(resp));
  };



  const postOneProduct = (product) => {
    productService
      .postOneProduct(product)
      .then((resp) => setList([...todos, resp]));
  };

  const createOneNotification = (notification) => {
    notificationService
      .createOneNotification(notification)
      .then((resp) => setNoti([...noti, resp]));
  };

  const postOneOperation = (operation) => {
    operationService
      .postOneOperation(operation)
      .then((resp) => setOperation([...operat, resp]));
  };

  const postOneSetting = (setting) => {
    settingService
      .postOneSetting(setting)
      .then((resp) => setSettos([...settos, resp]));
  };

  const putOneProduct = (id, product) => {
    productService
      .putOneProduct(id, product)
      .then((resp) =>
        setList([...todos.filter((emp) => emp.id !== id), resp])
      );
  };

  const updateOneSetting = (id, newSetting) => {
    settingService
      .updateOneSetting(id, newSetting)
      .then((resp) => setSettos([...settos.map(setting => setting.id === id ? newSetting : setting)]));
  };

  const deleteOneProduct = (id) => {
    productService
      .deleteOneProduct(id)
      .then((resp) => setList([...todos.filter((emp) => emp.id !== id)]));
  };

  const deleteOneOperation = (name) => {
    operationService
      .deleteOneOperation(name)
      .then((resp) => setOperation([...operat.filter((emp) => emp.name !== name)]));
  };


  const deleteOneSetting = (id) => {
    settingService
      .deleteOneSetting(id)
      .then((resp) => setSettos([...settos.filter((cal) => cal.id !== id)]));
  };

  const deleteAllProducts = () => {
    productService.deleteAllProducts().then(() => setList([]));
  };

  const deleteAllNotifications = () => {
    notificationService.deleteAllNotifications().then(() => setNoti([]));
  };

  const deleteAllOperations = () => {
    operationService.deleteAllOperations().then(() => setOperation([]));
  };


  const [selectedTodo, setSelectedTodo] = useState({
    inputText: "",
    inputDate: "",
    inputCode: null,
    inputPiece: null,
    inputComment: ""
  });


  const [valuesFive, setValuesFive] = useState({
    settingId: 1,
    settingDanger: ""
  });



  const [settingDivPen, setSettingDivPen] = useState(false)

  const [valuesTwo, setValuesTwo] = useState({
    inputId: 0,
    inputPiece: receivedData.inputPiece,
    inputText: receivedData.inputText,
    inputCode: receivedData.inputCode,
    inputDate: receivedData.inputDate,
    inputComment: receivedData.inputComment,
    inputPrice: receivedData.inputPrice,
    inputCategory: receivedData.inputCategory
  });

  const notificationOpenViewFunc = () => {
    setNotificationView(!notificationView)
    setNotiCircle(false)
  }

  const [notificationView, setNotificationView] = useState(false)

  const deleteAllNotification = () => {
    deleteAllNotifications();
  }

  let noti2 = [];

  for (let i = noti.length - 1; i >= 0; i--) {
    noti2.push(noti[i]);
    if (noti2.length === 7) {
      break; // noti2 dizisi 7 öğeye ulaştığında döngüyü sonlandırın
    }
  }


  let todos2 = [];

  for (let i = todos.length - 1; i >= 0; i--) {
    todos2.push(todos[i]);
    if (todos2.length === 4) {
      break;
    }
  }
  const [openProfileDiv, setOpenProfileDiv] = useState(false)


  const openProfileFunc = () => {
    setOpenProfileDiv(!openProfileDiv)
  }
  const values = {
    todos,
    setList,
    selectedTodo,
    setSelectedTodo,
    deleteOneSetting,
    getAllSettings,
    postOneSetting,
    postOneProduct,
    putOneProduct,
    deleteOneProduct,
    uyariBir,
    setUyariBir,
    uyariIki,
    setUyariIki,
    deletePost,
    setDeletePost,
    openScreen,
    setOpenScreen,
    selectedEmployee,
    setSelectedEmployee,
    openViewFunc,
    closeViewFunc,
    valuesx,
    setValuesx,
    handleSubmit,
    handleChange,
    editScreen,
    setEditScreen,
    closeViewFunc2,
    qrCodeFunc,
    qrcodediv,
    setQrcodediv,
    receivedData,
    setReceivedData,
    qrCodeFuncClose,
    barCodeFunc,
    barCodeFuncClose,
    barcodediv,
    setBarcodediv,
    settos,
    setSettos,
    updateOneSetting,
    settingData,
    setSettingData,
    valuesSet,
    setValuesSet,
    settingDivPen,
    setSettingDivPen,
    valuesFive,
    setValuesFive,
    deleteAllProducts,
    getAllSettings,
    getAllOperations,
    postOneOperation,
    deleteOneOperation,
    deleteAllOperations,
    setOperation,
    operat,
    buydiv,
    setBuydiv,
    openBuyAdd,
    setOpenBuyAdd,
    purchaseSubmit,
    purchaseChange,
    valuesPurchase,
    setValuesPurchase,
    setBuyProductName,
    setTodonunpraysi,
    updatedTodoId,
    setUpdatedTodoId,
    valuesTwo,
    setValuesTwo,
    deleteAllNotifications,
    createOneNotification,
    getAllNotifications,
    noti,
    setNoti,
    notiCircle,
    setNotiCircle,
    openSalesAdd,
    setOpenSalesAdd,
    purchaseSubmit2,
    salesdiv,
    setSalesdiv,
    notificationOpenViewFunc,
    setNotificationView,
    notificationView,
    noti2,
    setOpenProfileDiv,
    openProfileDiv,
    openProfileFunc,
    deleteAllNotification,
    todos2,
    buyCloseViewFunc,
    setDeleteOp,
    deleteOp,
    buyDeleteViewFunc

  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
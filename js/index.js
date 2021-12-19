const books = [
	{
		id: '1',
		title: `Apple. Эволюция компьютера`,
		author: `Владимир Невзоров`,
		img: `https://bukva.ua/img/products/449/449532_200.jpg`,
		plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
	},
	{
		id: '2',
		title: `Как объяснить ребенку информатику`,
		author: `Кэрол Вордерман`,
		img: `https://bukva.ua/img/products/480/480030_200.jpg`,
		plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
	},
	{
		id: '3',
		title: `Путь скрам-мастера. #ScrumMasterWay`,
		author: `Зузана Шохова`,
		img: `https://bukva.ua/img/products/480/480090_200.jpg`,
		plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
	},
];

const divRef = document.querySelector("#root");

const divLeft = document.createElement("div");
const divRight = document.createElement("div");
const titledDivLeftH1 = document.createElement("h1");
const listDivLeft = document.createElement("ul");
const btnDivLeft = document.createElement("button");


divRef.append(divLeft, divRight);

divRight.classList.add("right");
divLeft.classList.add("left");
titledDivLeftH1.textContent = "Список книг";
btnDivLeft.textContent = "Добавить";

divLeft.append(titledDivLeftH1,listDivLeft,btnDivLeft);



function makeListBooks() {
    const arrayTitleBooks = books.map(book => `<li> <p class="text-link">${book.title}</p> <button class ="btn-edit" >Edit</button>
    <button class = "btn-delete"> Delete</button> </li>`).join('')
    console.log(books);

    listDivLeft.insertAdjacentHTML("afterbegin", arrayTitleBooks); 
    
    const btnEdit = document.querySelectorAll(".btn-edit");
    const bntDelete = document.querySelectorAll(".btn-delete");
    const textLink = document.querySelectorAll(".text-link")
    btnEdit.forEach((btn) => btn.addEventListener("click",handleClickEdit));
    bntDelete.forEach((btn) => btn.addEventListener("click", handleClickDel));
    textLink.forEach((txt,idx) => txt.addEventListener("click", showPreview));

    function showPreview(event) {
        const target = event.currentTarget.textContent;

        const targetBook = books.find(book => book.title === target);

        console.log(targetBook);
        const previewMarkup =`<h2>${targetBook.title}</h2> <p>${targetBook.author}</p><img src =${targetBook.img}>
         <p>${targetBook.plot}</p> `;
        divRight.innerHTML = "";
        divRight.insertAdjacentHTML("afterbegin", previewMarkup);
       
        
        
        
    }
    
    function handleClickEdit() {
        console.log("Edit");
    }
    function handleClickDel() {
        console.log("Delete");
    }

    
        
    };


makeListBooks()


console.log(listDivLeft);

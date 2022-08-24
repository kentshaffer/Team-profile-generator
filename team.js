let managerDiv = document.querySelector('.manager-div')
  for(let i = 0; i < managerArray.length; i++) {
    console.log(managerArray);
    let managerName = (managerArray[i].name);
    let managerId = (managerArray[i].id);
    let managerEmail = (managerArray[i].email);
    let managerOffice = (managerArray[i].officeNumber);

    let managerCardDiv = document.createElement('div');
    managerCardDiv.setAttribute('class', 'manager-container');

    let managerCardBodyDiv = document.createElement('div');
    managerCardBodyDiv.setAttribute('class', 'manager-card-body');

    let managerCardTitleDiv = document.createElement('h5');
    let managerCardTitle = managerName + ': Manager';
    managerCardTitleDiv.textContent = managerCardTitle;
    managerCardTitleDiv.setAttribute('class', 'manager-card-title');

    let managerIdEl = document.createElement('p');
    managerIdEl.setAttribute('class', 'manager-card-text');
    managerIdEl.textContent = 'ID: ' + managerId;

    let managerEmailEl = document.createElement('p');
    managerEmailEl.setAttribute('class', 'manager-card-text');
    managerEmailEl.textContent = 'Email: ' + managerEmail;

    let managerOfficeEl = document.createElement('p');
    managerOfficeEl.setAttribute('class', 'manager-card-text');
    managerOfficeEl.textContent = 'Office Number: ' + managerOffice;

    managerCardBodyDiv.appendChild(managerCardTitleDiv);
    managerCardBodyDiv.append(managerIdEl, managerEmailEl, managerOfficeEl);
    managerCardDiv.appendChild(managerCardBodyDiv);
    managerDiv.appendChild(managerCardDiv);
    }
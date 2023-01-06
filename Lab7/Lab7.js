function Print() {
    let form = document.forms.firstForm;
    let checkBoxes = [];
    document.write('<p style="text-align: center">' + form.Fac.value + '</p>');
    document.write('<p>' + "Студент " + form.lastName.value + " специальность " + form.Spec.value + " курс " + form.kurs.value + " должен сдавать следующие предметы:" + '</p>');
    document.write("<ul>");

    for(let i = 0; i < form.subject.length; i++){
        if(form.subject[i].checked) {
            document.write("<li>" + form.subject[i].value + "</li>");
            checkBoxes.push(form.subject[i]);
        }
    }
    document.write("</ul>");
    
    document.write(`
    <form name="secondForm">
        <fieldset>
        <legend> Предметы из первой формы </legend>
        Предметы
            <select name="Subj"></select>
        </fieldset>
    </form>    
    `);
    for (let key of checkBoxes){
        let newOption = new Option(key.value, key.name);
        secondForm.Subj.options[secondForm.Subj.options.length] = newOption;
    }
}
        
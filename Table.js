export class Table
{
    constructor(Size)
    {
        this.S = Size;
    }


    
    CreateTable()
    {
        const Table = document.createElement("Table");
        const tBody = document.createElement("tbody");

        Table.appendChild(tBody);

        for (let index = 0; index < this.S; index++) {
            const TR = document.createElement("tr");
            
            for (let index = 0; index < this.S; index++) {
                const Td = document.createElement("td");
                Td.setAttribute = (onclick,"this.style.backgroundColor = 'Blue';");
                
                TR.appendChild(Td);
            }

            tBody.appendChild(TR);

        }
        console.log(Table)
        return Table;
    }

}

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListBook() {
    async function deleteBook(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from book where id=${id}`
        revalidatePath("/admin/book")
    }
    const { rows } = await sql`SELECT * from book`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de livros</h1>

            <table>
                <thead>
                    <tr> <td>titulo </td> <td>paginas</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((book) => {
                            return (
                                <tr key={book.id}><td>{book.titulo}</td> <td>{book.paginas}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={book.id}/>   
                                    <button className="text-red-700" formAction={deleteBook}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}
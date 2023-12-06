import { sql } from "@vercel/postgres";

export const revalidate =0

export default function NewBook({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveBook(formData: FormData){
        "use server"
        const titulo = formData.get("titulo") as string;
        const paginas = formData.get("pagina") as string;
        await sql`INSERT INTO book (titulo, pagina) VALUES(${titulo}, ${paginas})`
        console.log("Acessou a função")
    }
    return (
        <div>
        <h1 className="text-white text-center text-4xl">Cadastrar Livro</h1>
            <form>
                <input type="text" name="titulo" placeholder="Digite o titulo do livro"/><br/><br/>
                <input type="text" name="paginas" placeholder="Digite o numero de paginas do livro"/> <br/><br/>
                <br/>
                
                <button  formAction={saveBook} className="text-lime-950">Salvar</button>
            </form>
            </div>

    )
}
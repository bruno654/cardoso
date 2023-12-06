import { Bars4Icon, NewspaperIcon } from "@heroicons/react/24/outline";

export default function Aside() {
  return (
    <div className="w-1/4 border-r">
      <div>
        <h2>Livro</h2>
        <a href="/admin/books">
          <div className="flex items-center hover:text-gray-500">
            <Bars4Icon className="h-4 mr-2" />
            <span>Listar Livros</span>
          </div>
        </a>
        <br />

        <a href="/admin/books/new">
          <div className="flex items-center hover:text-gray-500">
            <NewspaperIcon className="h-4 mr-2" />
            <span>Cadastrar Livro</span>
          </div>
        </a>
      </div>
    </div>
  );
}

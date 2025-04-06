
export default function Home(){
    return (
      <div>
          <div className="grid auto-cols-fr rounded-[4px] border bg-white">
          <div
            role={'row'}
            className="col-span-4 grid grid-cols-subgrid items-center border-b bg-gray-100 font-bold"
          >
            <div className="bg-red-500 w-[300px] h-[500px]">a</div>
          </div>
          <div role={'row'}>
            <p>２６歳大阪</p>
          </div>
          <div role={'row'}>
            <p>趣味ゲーム</p>
          </div>
        </div>
      </div>
    );
}
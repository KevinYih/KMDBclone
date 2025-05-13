import useFetch from "../hooks/useFetch";


function PingTest() {
  const { responseData, loading } = useFetch();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">前后端连接测试</h1>
      {loading && <p>加载中...</p>}
      {responseData && <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(responseData, null, 2)}</pre>}
    </div>
  );
}

export default PingTest;
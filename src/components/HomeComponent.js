// React 函数组件示例，使用 useEffect Hook 在组件加载和更新时获取数据:
function HomeComponent() {
  return (
    <div>
      <h2 className="text-green-700 text-lg font-bold mb-4">Home</h2>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
          <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;

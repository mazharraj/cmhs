// eslint-disable-next-line react/prop-types
export default function LoggedIn({ onLogout }) {
  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-6">
          Log Out
        </button>
      </div>
      <div className="h-screen">
        <p className="text-center text-4xl text-semibold">
          Welcome To Admin Panel
        </p>
      </div>
    </div>
  );
}

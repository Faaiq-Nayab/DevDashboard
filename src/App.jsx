import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <div className="w-full h-screen flex bg-slate-100">
      <Sidebar
        mobileMenuIsOpen={mobileMenuIsOpen}
        setMobileMenuIsOpen={setMobileMenuIsOpen}
      />

      <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden">
        <Navbar
          mobileMenuIsOpen={mobileMenuIsOpen}
          setMobileMenuIsOpen={setMobileMenuIsOpen}
        />

        <section className="p-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default App;
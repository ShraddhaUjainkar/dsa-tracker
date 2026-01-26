"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import RequireSetup from "@/components/RequireSetup";

export default function SetupPage() {
  const router = useRouter();
  const setUser = useUserStore((s) => s.setUser);
  const { isSetupDone } = useUserStore();
  const [name, setName] = useState("");
  const [role, setRole] = useState("Student");

  return (
    <RequireSetup>
      <div className="h-screen overflow-hidden flex items-center justify-center bg-linear-to-br from-indigo-50 via-slate-50 to-white px-4">
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
              Welcome 👋
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Let’s set up your DSA journey
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-600">
                Your name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="
                rounded-md border border-slate-300 px-3 py-2 text-sm
                focus:border-indigo-500 focus:outline-none focus:ring-2
                focus:ring-indigo-100
              "
              />
            </div>

            {/* Role */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium text-slate-600">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="
                rounded-md border border-slate-300 px-3 py-2 text-sm
                focus:border-indigo-500 focus:outline-none focus:ring-2
                focus:ring-indigo-100
              "
              >
                <option>Student</option>
                <option>Working Professional</option>
                <option>Beginner</option>
              </select>
            </div>

            {/* Button */}
            <button
              disabled={!name}
              onClick={() => {
                setUser(name, role);
                router.replace("/dashboard");
              }}
              className="
              mt-2 w-full rounded-md bg-indigo-600 py-2.5
              text-sm font-medium text-white transition
              hover:bg-indigo-700
              focus:outline-none focus:ring-2 focus:ring-indigo-200
              disabled:cursor-not-allowed disabled:opacity-50
            "
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </RequireSetup>
  );
}

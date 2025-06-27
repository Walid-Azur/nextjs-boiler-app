"use client";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dummy data for the table
const data = [
  {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: "2",
    name: "Bob Williams",
    email: "bob@example.com",
    status: "Pending",
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie@example.com",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Diana Prince",
    email: "diana@example.com",
    status: "Active",
  },
  { id: "5", name: "Eve Adams", email: "eve@example.com", status: "Pending" },
  {
    id: "6",
    name: "Frank White",
    email: "frank@example.com",
    status: "Active",
  },
  {
    id: "7",
    name: "Grace Hall",
    email: "grace@example.com",
    status: "Inactive",
  },
  { id: "8", name: "Harry King", email: "harry@example.com", status: "Active" },
  { id: "9", name: "Ivy Green", email: "ivy@example.com", status: "Pending" },
  { id: "10", name: "Jack Black", email: "jack@example.com", status: "Active" },
];

function DataTableContent() {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn as keyof typeof a];
    const bValue = b[sortColumn as keyof typeof b];

    if (typeof aValue === "string" && typeof bValue === "string") {
      return sortDirection === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = sortedData.slice(startIndex, endIndex);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <main className="flex-1 p-6">
      <div className="container mx-auto max-w-6xl py-8">
        <h1 className="text-3xl font-bold mb-6">Data Table Example</h1>
        <p className="text-muted-foreground mb-8">
          A basic data table demonstrating sorting and pagination, built with
          standard HTML table elements and styled with Tailwind CSS.
        </p>

        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted/40">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("id")}
                    className="inline-flex items-center"
                  >
                    ID
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("name")}
                    className="inline-flex items-center"
                  >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("email")}
                    className="inline-flex items-center"
                  >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("status")}
                    className="inline-flex items-center"
                  >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-foreground">
                    {item.id}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                    {item.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-muted-foreground">
                    {item.email}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        item.status === "Active"
                          ? "bg-primary/20 text-primary"
                          : item.status === "Pending"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-muted/20 text-muted-foreground"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav
          className="flex items-center justify-between border-t border-border bg-card px-4 py-3 sm:px-6 mt-4 rounded-lg"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(endIndex, sortedData.length)}
              </span>{" "}
              of <span className="font-medium">{sortedData.length}</span>{" "}
              results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="mr-2"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </nav>
      </div>
    </main>
  );
}

const DynamicDataTableContent = dynamic(
  () => Promise.resolve(DataTableContent),
  {
    ssr: false,
  }
);

export default function DataTablePageWrapper() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <DynamicDataTableContent />
      <Footer />
    </div>
  );
}

import { CgDetailsMore } from "react-icons/cg";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Button from "../../Form Components/Button";
import { RiFileExcel2Line } from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";

const RegisteredStudents = ({ filteredData }) => {
  const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "FilteredStudents");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, "Filtered_Students.xlsx");
  };
  const exportToPDF = (data) => {
    const doc = new jsPDF();
    doc.setProperties({
      title: "Filtered Students",
    });
    doc.text("Filtered Students", 14, 10);

    // const tableColumn = ["Reg No", "Name", "Course", "Section"];
    // const tableRows = data.map((student) => [
    //   student.regNo,
    //   student.name,
    //   student.course,
    //   student.section,
    // ]);
    autoTable(doc, {
      html: "#filter-table",
      theme: "plain",
      styles: {
        lineWidth: 0.5,
        lineColor: 10,
      },
      // tableLineWidth: 1,
      // tableLineColor: 0
    });
    // doc.autoTable({
    //   head: [tableColumn],
    //   body: tableRows,
    //   startY: 20,
    // });

    doc.save("Filtered_Students.pdf");
  };

  return (
    <div className="wrapper w-full h-full">
      <div className="students-list-container w-full md:h-full border-2 rounded-lg">
        <table
          id="filter-table"
          className="reg-stu-table w-full min-w- h-4 overflow-y-auto border-collapse text-center"
        >
          <thead className="">
            <tr className="column-label-row border-b-2">
              <th className="column-label border-r">Action</th>
              <th className="column-label border-r">Reg. No.</th>
              <th className="column-label border-r">Name</th>
              <th className="column-label border-r">Course</th>
              <th className="column-label">Section</th>
            </tr>
          </thead>
          <tbody className="">
            {filteredData &&
              filteredData.map((student, index) => (
                <tr
                  key={index}
                  className="column-content-row border-b hover:bg-[#ffc0c0] transition-colors duration-100 ease-in-out"
                >
                  <td className="column-content border-r-1 place-items-center">
                    <CgDetailsMore className="text-blue-500 text-2xl cursor-pointer" />
                  </td>
                  <td className="column-content text-md font-medium border-r-1">
                    {student.regNo}
                  </td>
                  <td className="column-content text-md font-medium border-r-1">
                    {student.name}
                  </td>
                  <td className="column-content text-md font-medium border-r-1">
                    {student.course}
                  </td>
                  <td className="column-content text-md font-medium">
                    {student.section}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {filteredData && (
        <div className="save-excel-pdf mt-5 w-full flex justify-end gap-4 border-red-700">
          <Button
            name="Download Excel"
            icon={RiFileExcel2Line}
            bgColor="bg-green-500"
            onClickFn={() => exportToExcel(filteredData)}
          />
          <Button
            name="Download PDF"
            icon={GrDocumentPdf}
            bgColor="bg-red-500"
            onClickFn={() => exportToPDF(filteredData)}
          />
        </div>
      )}
    </div>
  );
};

export default RegisteredStudents;

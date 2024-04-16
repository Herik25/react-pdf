import ReactPDF, {
  Document,
  Font,
  Line,
  PDFDownloadLink,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";
import "./PdfFile.css";
import { useParams } from "react-router-dom";
import Poppins from "../assets/Poppins-Medium.ttf";

function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date(date);

  const day = d.getDate();
  const monthIndex = d.getMonth();
  const year = d.getFullYear();

  const formattedDate = `${day}-${months[monthIndex]}-${year}`;

  return formattedDate;
}

function PdfFile({ dName, Dcourse }) {
  const urlParams = new URLSearchParams(window.location.search);
  const name = dName ? dName : urlParams.get("name");
  const course = Dcourse ? Dcourse : urlParams.get("course");

  return (
    <Document>
      <Page style={styles.body}>
        <View>
          <Text style={styles.invoiceTitle}>
            Ref - {course === "m.tech" ? "B101" : "A101"}
          </Text>
        </View>
        <br />

        <View>
          <Text style={styles.customerLabel}>
            Name: <Text style={styles.customerName}>{name}</Text>
          </Text>
        </View>
        <br />

        <View>
          <Text style={styles.customerLabel}>
            Course: <Text style={styles.customerName}>{course}</Text>
          </Text>
        </View>
        <br />

        <View>
          <Text style={styles.customerLabel}>
            Date Of Offer (Current Date):{" "}
            <Text style={styles.customerName}>{formatDate(Date.now())}</Text>
          </Text>
        </View>
        <br />

        <View>
          <Text style={styles.customerLabel}>Fee Structure:</Text>
        </View>
        <br />

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>Year</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>One Time Fee</Text>
            </View>
            <View style={styles.tableCell2}>
              <Text>Tuition Fee</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text>1</Text>
            </View>
            <View style={styles.tableCell}>
              <Text>{course === 'm.tech' ? 600 : 500}</Text>
            </View>
            <View style={styles.tableCell2}>
              <Text>{course === 'm.tech' ? 260 : 160}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCell1}>
              <Text>2</Text>
            </View>
            <View style={styles.tableCell1}>
              <Text>-</Text>
            </View>
            <View style={styles.tableCell12}>
              <Text>{course === 'm.tech' ? 260 : 160}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

Font.register({
  family: "poppins",
  src: Poppins,
  format: "truetype",
});

const styles = StyleSheet.create({
  body: {
    fontFamily: "poppins",
    marginTop: 50,
    marginLeft: 50,
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    boxSizing: "border-box",
  },

  invoiceTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  customerLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  customerName: {
    fontSize: 18,
    paddingLeft: 15,
    boxSizing: "border-box",
  },

  courseName: {
    fontSize: 12,
  },

  totalAmount: {
    fontSize: 16,
  },

  footerContainer: {
    marginTop: 20,
    textAlign: "center",
  },

  footerText: {
    fontSize: 12,
  },

  table: {
    display: "table",
    width: "100%",
    
  },
  tableRow: { flexDirection: "row", },
  tableCell: {
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    minWidth: "150px",
    borderBottom: 0,
    borderRight: 0,
  },
  tableCell1: {
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    minWidth: "150px",
    borderRight: 0
  },
  tableCell2: {
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    minWidth: "150px",
    borderBottom: 0
  },
  tableCell12: {
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    minWidth: "150px",
  },

  tableHeaderCell: {
    padding: 5,
    fontWeight: "bold",
  },
});

export default PdfFile;

import React from "react";
import Table from "react-bootstrap/Table";
export default function list() {
  return (
    <>
      <table>
        <thead>
          <tr className="background-grey ">
            <th>No.</th>
            <th>Iteam</th>
            <th>Quantity</th>
            <th>Revenu</th>
            <th>Netprofit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Sashimi</td>
            <td>30</td>
            <td> $293.01</td>
            <td> $710.68 </td>
          </tr>
          <tr>
            <td>02</td>
            <td>Ubagi-Brilled Eel</td>
            <td>30</td>
            <td>$739.65 </td>
            <td>$779.58 </td>
          </tr>
          <tr>
            <td>03</td>
            <td>Soba - Buckwheat Noodles</td>
            <td>30</td>
            <td>$779.58</td>
            <td>$778.35 </td>
          </tr>
          <tr>
            <td>04</td>
            <td>Onigiri Rice Balls</td>
            <td>30</td>
            <td>$779.58</td>
            <td>$778.35 </td>
          </tr>
          <tr>
            <td>05</td>
            <td>sashmi</td>
            <td>30</td>
            <td>$779.58</td>
            <td>$778.35 </td>
          </tr>
          <tr>
            <td>06</td>
            <td>Yakitori - Grilled Chicken</td>
            <td>30</td>
            <td>$779.58</td>
            <td>$778.35 </td>
          </tr>
          <tr>
            <td>07</td>
            <td>Royal Milk</td>
            <td>30</td>
            <td>$779.58</td>
            <td>$778.35 </td>
          </tr>
          <tr>
            <td>08</td>
            <td>Flavored Soymilk Drinks</td>
            <td>30</td>
            <td>$779.58</td>
            <td>$778.35 </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

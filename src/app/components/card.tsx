import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <section className="container mx-auto  py-10 flex flex-col  md:flex-row items-center  ">
      <div className="md:w-1/2 md:pr-10 ">
        <h2 className="text-3xl  font-bold mb-4 text-white">
          Delicious Burger{" "}
        </h2>
        <p className="text-white mb-4">
          Experience the juiciest burger in town , made with fresh ingredient
          and grilled to perfection
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200">
          {" "}
          Order Now
        </button>

        <h3 className="text-2xl font-bold mt-6 mb-2 text-center text-white text-center">
          Coming Soon : Our New Burger Launched
        </h3>


        <ul className="text-white ">
            <li><strong>Mighty Melt Burger Savory beef,    </strong>  melted cheddar, and sautéed mushrooms in a perfect bite.🍔</li>
            <li><strong>Crunch King Burger Beef patty,     </strong> crispy lettuce, and spicy sauce. A crunchy delight. 🍔</li>
            <li><strong>Fiesta Flame Burger Zesty beef,    </strong>  pepper jack cheese, and jalapeños. 🌶</li>
            <li><strong>Classic Sizzle Burger Juicy beef,  </strong>    classic cheddar, and smoky BBQ. 🍔</li>
            <li><strong>Sunset Glow Burger Savory beef,    </strong>  golden cheese, and caramelized onions. ☀️</li>
        </ul>
      </div>
        <div className="md:w-1/2  mt-6 md:mt-0">
        <Image 
        src="https://cdn.greatdeals.com.sg/wp-content/uploads/2017/02/24021308/burger-king-ultimate-burgers-february-2017-900x900.jpg.webp"
        alt="card"
        width={700}
        height={700}
        className=" h-[450px] rounded-lg shadow-lg transition-transform transform duration-500 ease-in-out hover:scale-105 mr-7 "/>
        
</div>
    </section>
  );
}

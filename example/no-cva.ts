function buttonClasses(color: string, size: string) {
    let classes = "font-medium rounded";

    if (color === "blue") classes += " bg-blue-600 text-white";
    if (color === "red") classes += " bg-red-600 text-white";

    if (size == "sm") classes += " px-3 py-'1";
    if (size == "lg") classes += " px-6 py-3";

    return classes;
}
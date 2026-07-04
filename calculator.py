def add(num1, num2):
    return num1 + num2


def subtract(num1, num2):
    return num1 - num2


def multiply(num1, num2):
    return num1 * num2


def divide(num1, num2):
    if num2 == 0:
        return "Error: Cannot divide by zero."
    return num1 / num2


def calculator():
    print("Simple Python Calculator")
    print("Choose an operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Exit")

    while True:
        choice = input("\nEnter your choice (1-5): ")

        if choice == "5":
            print("Goodbye!")
            break

        if choice not in ("1", "2", "3", "4"):
            print("Invalid choice. Please choose from 1 to 5.")
            continue

        try:
            first_number = float(input("Enter first number: "))
            second_number = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input. Please enter numbers only.")
            continue

        if choice == "1":
            result = add(first_number, second_number)
        elif choice == "2":
            result = subtract(first_number, second_number)
        elif choice == "3":
            result = multiply(first_number, second_number)
        else:
            result = divide(first_number, second_number)

        print("Result:", result)


calculator()

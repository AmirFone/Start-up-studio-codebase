import csv
import argparse


def read_names_from_csv(file_path):
    names = []
    with open(file_path, mode='r', newline='') as file:
        reader = csv.DictReader(file)
        for row in reader:
            names.append(row['Name'])
    return names


def generate_emails(names, domain, patterns):
    emails = []
    for name in names:
        first_name, last_name = name.split()
        for pattern in patterns:
            email = pattern.replace('{first}', first_name.lower()).replace('{last}', last_name.lower()).replace(
                '{domain}', domain)
            emails.append((name, email))
    return emails


def save_to_csv(emails, filename):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Name", "Email"])
        writer.writerows(emails)


def main():
    parser = argparse.ArgumentParser(
        description="Generate email addresses from names in a CSV file and a company domain.")
    parser.add_argument('domain', type=str, help="Company email domain (e.g., company.com)")
    parser.add_argument('file_path', type=str, help="Path to the CSV file containing names")
    args = parser.parse_args()

    names = read_names_from_csv(args.file_path)

    patterns = [
        '{first}.{last}@{domain}',
        '{first}{last}@{domain}',
        '{first}@{domain}',
        '{first[0]}{last}@{domain}',
        '{last}{first[0]}@{domain}',
    ]

    emails = generate_emails(names, args.domain, patterns)
    save_to_csv(emails, 'emails.csv')
    print("Emails have been generated and saved to emails.csv.")


if __name__ == "__main__":
    main()

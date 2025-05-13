import os

TARGET = "items-toplist"
REPLACEMENT = "toplist"

for root, dirs, files in os.walk('.', topdown=False):  # topdown=False важен для корректного переименования
    # Переименование файлов
    for name in files:
        if TARGET in name:
            old_path = os.path.join(root, name)
            new_name = name.replace(TARGET, REPLACEMENT)
            new_path = os.path.join(root, new_name)
            os.rename(old_path, new_path)
            print(f"[Файл] Переименовано: {old_path} → {new_path}")

    # Переименование папок
    for name in dirs:
        if TARGET in name:
            old_path = os.path.join(root, name)
            new_name = name.replace(TARGET, REPLACEMENT)
            new_path = os.path.join(root, new_name)
            os.rename(old_path, new_path)
            print(f"[Папка] Переименовано: {old_path} → {new_path}")

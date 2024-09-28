-- Insert famous historical cities into the 'location' table
INSERT INTO location (name, description,imageurl) VALUES
                                             ('Athens', 'Ancient Greek city known for its contributions to philosophy, art, and democracy.','https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/1024px-The_Parthenon_in_Athens.jpg'),
                                             ('Rome', 'The capital of the Roman Empire, renowned for its vast historical significance.','https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/2560px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg'),
                                             ('Jerusalem', 'A historically significant city for Judaism, Christianity, and Islam.'),
                                             ('Alexandria', 'Founded by Alexander the Great, known for the Lighthouse of Alexandria and its library.','https://upload.wikimedia.org/wikipedia/commons/c/cf/Jerusalem-1712855.jpg'),
                                             ('Istanbul', 'Formerly Byzantium and Constantinople, a key city in both the Roman and Ottoman Empires.','https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?s=612x612&w=0&k=20&c=UHyYLC4VVJef9V8vzdJsVwqSjX3N06D2-975j3VoajY='),
                                             ('Memphis', 'An ancient capital of Egypt, known for its proximity to the pyramids of Giza.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxi-c9Q_2C_AfHcKCsBsCc4dKmdEfZi39dw&s'),
                                             ('Persepolis', 'The ceremonial capital of the Achaemenid Empire, known for its monumental architecture.','https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tachara%2C_Persepolis.jpg/1280px-Tachara%2C_Persepolis.jpg'),
                                             ('Carthage', 'An ancient Phoenician city, rival to Rome during the Punic Wars.','https://upload.wikimedia.org/wikipedia/commons/a/a2/Carthage_National_Museum_representation_of_city.jpg');


INSERT INTO auth_user (username, email, password, role) VALUES
                                                                 ('john_doe', 'john@example.com', 'password123', 'NORMAL'),
                                                                 ('jane_smith', 'jane@example.com', 'password123', 'HOST'),
                                                                 ('alice_wonder', 'alice@example.com', 'password123', 'NORMAL'),
                                                                 ('bob_builder', 'bob@example.com', 'password123', 'HOST');
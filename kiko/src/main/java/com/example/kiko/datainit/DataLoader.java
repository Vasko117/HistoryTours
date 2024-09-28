package com.example.kiko.datainit;

import com.example.kiko.models.Location;
import com.example.kiko.models.Tour;
import com.example.kiko.models.User;
import com.example.kiko.models.UserRole;
import com.example.kiko.repo.LocationRepo;
import com.example.kiko.repo.UserRepo;
import com.example.kiko.repo.TourRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;

@Component
public class DataLoader {

    private final LocationRepo locationRepository;
    private final UserRepo userRepository;
    private final TourRepo tourRepository;

    @Autowired
    public DataLoader(LocationRepo locationRepository, UserRepo userRepository, TourRepo tourRepository) {
        this.locationRepository = locationRepository;
        this.userRepository = userRepository;
        this.tourRepository = tourRepository;
    }

    @PostConstruct
    public void loadData() {
        // Load locations
        Location athens = new Location("Athens", "Ancient Greek city known for its contributions to philosophy, art, and democracy.", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/1024px-The_Parthenon_in_Athens.jpg", "Classical Greece (5th to 4th century BC)");
        Location rome = new Location("Rome", "The capital of the Roman Empire, renowned for its vast historical significance.", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/2560px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg", "Roman Empire (27 BC to AD 476)");
        Location jerusalem = new Location("Jerusalem", "A historically significant city for Judaism, Christianity, and Islam.", "https://upload.wikimedia.org/wikipedia/commons/c/cf/Jerusalem-1712855.jpg", "Ancient to Medieval periods (Kingdom of Judah to Crusades)");
        Location alexandria = new Location("Alexandria", "Founded by Alexander the Great, known for the Lighthouse of Alexandria and its library.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJob-kv2C-x-3GXgSkLP7jUzGq73IrWt6mSA&s", "Hellenistic Period (4th to 1st century BC)");
        Location istanbul = new Location("Istanbul", "Formerly Byzantium and Constantinople, a key city in both the Roman and Ottoman Empires.", "https://media.istockphoto.com/id/1283504873/photo/mosque-and-bosphorus-bridge.jpg?s=612x612&w=0&k=20&c=UHyYLC4VVJef9V8vzdJsVwqSjX3N06D2-975j3VoajY=", "Byzantine to Ottoman Empire (4th to 20th century AD)");
        Location memphis = new Location("Memphis", "An ancient capital of Egypt, known for its proximity to the pyramids of Giza.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfxi-c9Q_2C_AfHcKCsBsCc4dKmdEfZi39dw&s", "Ancient Egypt (31st century BC to 7th century AD)");
        Location persepolis = new Location("Persepolis", "The ceremonial capital of the Achaemenid Empire, known for its monumental architecture.", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tachara%2C_Persepolis.jpg/1280px-Tachara%2C_Persepolis.jpg", "Achaemenid Empire (6th to 4th century BC)");
        Location carthage = new Location("Carthage", "An ancient Phoenician city, rival to Rome during the Punic Wars.", "https://upload.wikimedia.org/wikipedia/commons/a/a2/Carthage_National_Museum_representation_of_city.jpg", "Punic Period (9th to 2nd century BC)");

        locationRepository.saveAll(Arrays.asList(athens, rome, jerusalem, alexandria, istanbul, memphis, persepolis, carthage));

        // Load users
        User john = new User("john_doe", "john@example.com", "password123", UserRole.NORMAL);
        User jane = new User("jane_smith", "jane@example.com", "password123", UserRole.HOST);
        User alice = new User("alice_wonder", "alice@example.com", "password123", UserRole.NORMAL);
        User bob = new User("bob_builder", "bob@example.com", "password123", UserRole.HOST);

        userRepository.saveAll(Arrays.asList(john, jane, alice, bob));

        // Load tours with LocalDate
        Tour athensTour = new Tour("Athens Tour", LocalDate.of(2024, 10, 1), LocalDate.of(2024, 10, 7), "A guided tour of Athens, exploring ancient landmarks and museums.", athens, bob.getId(), "https://images.squarespace-cdn.com/content/v1/569e766e69492e9dd5373ef6/1551536035038-T8S6OS4UDB13NHZJUI2E/_ABX3958-aperture-tours.jpg?format=1000w");
        Tour romeTour = new Tour("Rome Highlights", LocalDate.of(2024, 10, 10), LocalDate.of(2024, 10, 15), "Discover the history and beauty of Rome through its famous landmarks.", rome, jane.getId(), "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/2560px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg");
        Tour jerusalemTour = new Tour("Jerusalem History Tour", LocalDate.of(2024, 11, 1), LocalDate.of(2024, 11, 5), "Visit important religious and historical sites in Jerusalem.", jerusalem, bob.getId(), "https://upload.wikimedia.org/wikipedia/commons/c/cf/Jerusalem-1712855.jpg");
        Tour alexandriaTour = new Tour("Ancient Alexandria", LocalDate.of(2024, 9, 15), LocalDate.of(2024, 9, 20), "Explore the ancient wonders of Alexandria, including the lighthouse and library.", alexandria, bob.getId(), "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJob-kv2C-x-3GXgSkLP7jUzGq73IrWt6mSA&s");

        tourRepository.saveAll(Arrays.asList(athensTour, romeTour, jerusalemTour, alexandriaTour));

        System.out.println("Sample data loaded!");
    }
}

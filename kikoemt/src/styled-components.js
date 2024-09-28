import styled from "styled-components";

export const LocationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  height:max-content;
  overflow: auto;
`;
export const SearchInput = styled.input`
  width: 50%; // Adjust this as needed to make it bigger
  padding: 12px; // A bit bigger for visibility
  font-size: 18px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto; // This centers it with the display flex
  display: block; // Ensure it's centered
`;
export const LocationCard = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  transition: transform 0.2s;
  background-color: #f0e68c;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LocationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const LocationContent = styled.div`
  padding: 15px;
 
`;

export const LocationName = styled.h3`
  font-size: 1.5em;
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const LocationDescription = styled.p`
  font-size: 1em;
  color: #7f8c8d;
  margin-bottom: 10px;
`;

export const LocationDetails = styled.div`
  font-size: 0.9em;
  color: #34495e;
  margin-top: 10px;

  p {
    margin: 5px 0;
  }
`;
export const ToursContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const TourBillboard = styled.div`
  width: 80%;
  background-color: #f0e68c;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;  // Change to row to place image next to content
  align-items: center;
  &:hover {
    transform: scale(1.02);
  }
`;

export const TourImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

export const TourContent = styled.div`
  padding: 20px;
  flex: 1;
`;

export const TourName = styled.h2`
  font-size: 2em;
  color: #2c3e50;
`;

export const TourDate = styled.p`
  font-size: 1.2em;
  color: #34495e;
`;

export const TourDescription = styled.p`
  font-size: 1em;
  color: #7f8c8d;
  margin-top: 10px;
`;

export const TourDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #f0e68c;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 400px; /* Reduced max width */
  margin: 15px auto; /* Added margin for spacing */
`;

export const TourDetailsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 8px; /* Reduced bottom margin */
`;

export const TourDetailsContent = styled.div`
  padding: 8px; /* Reduced padding */
  text-align: center;
`;

export const TourDetailsName = styled.h2`
  font-size: 1.3em; /* Smaller font size */
  color: #2c3e50;
  margin: 4px 0; /* Reduced margin */
`;

export const TourDetailsDescription = styled.p`
  font-size: 0.9em; /* Smaller font size */
  color: #34495e;
  margin: 4px 0; /* Reduced margin */
`;

export const TourDetailsSection = styled.div`
  font-size: 0.8em; /* Smaller font size */
  color: #7f8c8d;
  margin-top: 8px; /* Reduced margin */

  p {
    margin: 2px 0; /* Reduced margin */
  }
`;

export const TourDetailsDate = styled.p`
  font-weight: bold;
`;
export const TourDetailsButtonContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Aligns buttons to the sides */
    width: 100%; /* Ensures the buttons take full width of the container */
    margin-top: 10px; /* Add some margin for spacing */
    
    .favorite-btn {
        flex: 1; /* Allows buttons to take equal space */
        margin: 0 5px; /* Add some space between buttons */
        padding: 8px; /* Adjust padding for better look */
        background-color: #2c3e50; /* Example button background */
        color: white; /* Button text color */
        border: none; /* Remove border */
        border-radius: 4px; /* Rounded corners */
        cursor: pointer; /* Change cursor on hover */
        transition: background-color 0.3s ease; /* Smooth transition */
        
        &:hover {
            background-color: #34495e; /* Darker shade on hover */
        }
    }
`;

export const ReservationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ReservationCard = styled.div`
  width: 60%; // Smaller than TourBillboard
  background-color: #f0e68c;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ReservationImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

export const ReservationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const ReservationTourName = styled.h3`
  font-size: 1.4em;
  color: #2c3e50;
  margin-bottom: 5px;
`;

export const ReservationDate = styled.p`
  font-size: 1em;
  color: #34495e;
`;

export const ReservationStatus = styled.p`
  font-size: 0.9em;
  color: #7f8c8d;
`;
export const ReservationMessage = styled.p`
    color: red; // Change the color as needed
    font-weight: bold;
    margin-top: 10px; // Add some space above the message
    font-size: 1.1rem; // Adjust the font size as needed
`;
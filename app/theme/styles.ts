import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    color: '#333333', // Cor cinza quase preto
  },
  image: {
    width: '80%',
    height: '50%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#333333', // Cinza quase preto
    borderRadius: 5, // Redução do borderRadius
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: '#333333', // Cor cinza quase preto
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  formButton: {
    backgroundColor: '#333333', // Cinza quase preto
    borderRadius: 5,
    marginTop: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    backgroundColor: '#333333', // Cor primária do app
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 32,
    color: '#fff', // Texto em branco
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  tabButtonMiddle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#333333', // Cor primária do app
    marginTop: -20, // Levanta o botão do meio
  },
  
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  iconText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
  activityList: {
    width: '100%',
    marginTop: 20,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  activityText: {
    fontSize: 16,
    color: '#333',
  },
  activityAmount: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 20,
  },
  
});
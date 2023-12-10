package dao;

import java.util.List;

import entities.BusOperators;

public interface IBusOperatorsDAO {
	public int createBusOperators(BusOperators busoperators);
	public int updateBusOperators(BusOperators busoperators);
	public int  deleteBusOperators(int Operator_ID);
	public BusOperators getBusOperatorsById(int Operator_ID);
	public List<BusOperators>getAllBusOperators();

}

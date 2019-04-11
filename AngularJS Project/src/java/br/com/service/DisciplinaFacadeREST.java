/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.service;

import br.com.entities.Disciplina;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 *
 * @author Fabricio
 */
@Stateless
@Path("/DisciplinaResource/")
public class DisciplinaFacadeREST extends AbstractFacade<Disciplina> {
    @PersistenceContext(unitName = "RestApiPU")
    private EntityManager em;

    public DisciplinaFacadeREST() {
        super(Disciplina.class);
    }

    @POST
    @Override
    @Consumes({"application/json"})
    @Produces({"application/json"})
    public void create(Disciplina entity) {
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    @Consumes({"application/xml", "application/json"})
    public void edit(@PathParam("id") Long id, Disciplina entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Long id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces({"application/json"})
    public Disciplina find(@PathParam("id") Long id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({"application/json"})
    public List<Disciplina> findAll() {
        return super.findAll();
    }

   
    @GET
    @Path("count")
    @Produces({"application/json"})
    public String countREST() {
        return String.valueOf(super.count());
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
}

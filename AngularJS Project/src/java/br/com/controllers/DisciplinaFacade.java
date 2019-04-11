/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package br.com.controllers;

import br.com.entities.Disciplina;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author Fabricio
 */
@Stateless
public class DisciplinaFacade extends AbstractFacade<Disciplina> {
    @PersistenceContext(unitName = "RestApiPU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public DisciplinaFacade() {
        super(Disciplina.class);
    }
    
}
